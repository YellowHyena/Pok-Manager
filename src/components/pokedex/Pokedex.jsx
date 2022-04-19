import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import './Pokedex.css'
import Pokeball from '../images/Pokeball.svg'
import SearchBar from './SearchBar';

const Pokedex = (team, setTeam) => {
	const [pokemons, setPokemons] = useState([])
	const context = { pokemons }
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

	useEffect(getPokemons, [])

	useEffect(() => {
		if (selected) checkNFetch()
	}, [selected])

	useEffect(() => {
		if (PokemonInfoCache.length > 0) getPokemonInfo() + setLoading('')
	}, [PokemonInfoCache])


	return (
		// <PokemonsContext.Provider value={context}>
			<section id="page">
				<div id='pokemon'>
					{<p id='info-name' className='name'>Name: {pokemonInfo ? pokemonInfo.name : ''} <br /> Number: {pokemonInfo ? pokemonInfo.id : ''}</p>}

					<img className={'shadow' + loading} src={pokemonInfo ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonInfo.id}.png` : Pokeball} alt="pokemon" />
					<img className={'image' + loading} src={pokemonInfo ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonInfo.id}.png` : Pokeball} alt="pokemonShadow" />

				</div>

				<div id='info'>info</div>

				<div id='list'>
					<PokemonList team={team} setTeam={setTeam} selected={selected} setSelected={setSelected} pokemons={pokemons} keyword={keyword}/>
				</div>

				<div id="search-bar">
					<SearchBar setKeyword={setKeyword}/>
				</div>
				<footer>Footer</footer>
			</section>
		// </PokemonsContext.Provider>
	);
}
export default Pokedex;