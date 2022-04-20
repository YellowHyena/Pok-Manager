import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import './Pokedex.css'
import Pokeball from '../images/Pokeball.svg'
import SearchBar from './SearchBar';
import { idOf } from '../Helper';

const Pokedex = ({ team, setTeam, pokemons, setPokemons }) => {
	const [selected, setSelected] = useState()
	const [keyword, setKeyword] = useState('')
	const [pokemonInfo, setPokemonInfo] = useState()
	const [PokemonInfoCache, setPokemonInfoCache] = useState([])
	const [loading, setLoading] = useState('')

	const getPokemons = (async () => {
		console.log('fetching pokemons')
		const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=20000')
		const data = await response.json()
		console.log('fetched', data.results.length, 'pokemons');
		setPokemons(data.results)
	})

	const checkNFetch = (async () => {

		if (!PokemonInfoCache.some(p => p.id === selected)) {
			console.log('fetching info for', selected)
			setLoading('-loading')
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${selected}/`)
			const data = await response.json()
			let newEntry = [...PokemonInfoCache]
			newEntry.push(data)
			setPokemonInfoCache(newEntry)
		}
		else getPokemonInfo()
	})

	const getPokemonInfo = () => {
		const foundPokemon = PokemonInfoCache.find((pokemon => pokemon.id === selected))
		foundPokemon ? console.log('found', foundPokemon.name) : console.log('could not find pokemon');
		setPokemonInfo(foundPokemon)
	}

	useEffect(() => { if (pokemons.length == 0) getPokemons() }, [])

	useEffect(() => {
		if (selected) checkNFetch()
	}, [selected])

	useEffect(() => {
		if (PokemonInfoCache.length > 0) getPokemonInfo() + setLoading('')
	}, [PokemonInfoCache])

	const toggleTeamMember = () => {
		if (team.filter(member => member.id === pokemonInfo.id).length==0 && team.length < 6) {
			let newTeam = [...team]
			newTeam.push({id: pokemonInfo.id, name: pokemonInfo.name})
			setTeam(newTeam)
			console.log('added to team');
		}
		else if (!team.filter(member => member.id === pokemonInfo.id).length==0){
			let newTeam = team.filter(member => member.id !== pokemonInfo.id)
			setTeam(newTeam)
			console.log('removed from team');
		}
		else console.log('team is full', team.length);

	}
	return (
		<section id="page">
			<div id='pokemon'>
				{<p id='info-name' className='name'>Name: {pokemonInfo ? pokemonInfo.name : ''} <br /> Number: {pokemonInfo ? pokemonInfo.id : ''}</p>}
				<img className={'shadow' + loading} src={pokemonInfo ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonInfo.id}.png` : Pokeball} alt="pokemon" />
				<img className={'image' + loading} src={pokemonInfo ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonInfo.id}.png` : Pokeball} alt="pokemonShadow" />
				<button className='team-btn' onClick={toggleTeamMember} > { pokemonInfo? team.filter(member => member.id === pokemonInfo.id).length ===0 ? 'ADD TO TEAM' : 'REMOVE FROM TEAM': 'PLEASE SELECT A POKEMON'}</button>
			</div>

			<div id='info'>info</div>

			<div id='list'>
				<PokemonList team={team} selected={selected} setSelected={setSelected} pokemons={pokemons} keyword={keyword} />
			</div>

			<div id="search-bar">
				<SearchBar setKeyword={setKeyword} />
			</div>
		</section>
	);
}
export default Pokedex;