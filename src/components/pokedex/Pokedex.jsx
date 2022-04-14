import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import './Pokedex.css'
import PokemonsContext from '../contexts/pokemonsContext';
import Pokeball from '../images/Pokeball.svg'

const Pokedex = (team, setTeam) => {
	const [pokemons, setPokemons] = useState([])
	const context = { pokemons }
	const [selected, setSelected] = useState()
	const [pokemonInfo, setPokemonInfo] = useState()
	const [fetchedPokemons, setFetchedPokemons] = useState([])
	const [loading, setLoading] =useState('')

	const getPokemons = (async () => {
		console.log('fetching pokemons')
		const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=20000')
		const data = await response.json()
		console.log('fetched', data.results.length, 'pokemons');
		setPokemons(data.results)
	})

	const checkNFetch = (async () => {

		if (!fetchedPokemons.some(p => p.id === selected)) {
			console.log('fetching info for', selected)
			setLoading('-loading')
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${selected}/`)
			const data = await response.json()
			let newEntry = [...fetchedPokemons]
			newEntry.push(data)
			setFetchedPokemons(newEntry)
		}
		else getPokemonInfo()
	})
	const getPokemonInfo = () => {
		const foundPokemon = fetchedPokemons.find((pokemon => pokemon.id === selected))
		foundPokemon? console.log('found', foundPokemon.name): console.log('could not find pokemon');
		setPokemonInfo(foundPokemon)
	}

	useEffect(getPokemons, [])

	useEffect(() => {
		if (selected) checkNFetch()
	}, [selected])

	useEffect(() => {
		if (fetchedPokemons.length > 0) getPokemonInfo()  + setLoading('')
	}, [fetchedPokemons])

	return (
		<PokemonsContext.Provider value={context}>
			<section id="page">
				<div id='pokemon'>
					{<p id='info-name' className='name'>Name: {pokemonInfo ? pokemonInfo.name : ''} <br /> Number: {pokemonInfo ? pokemonInfo.id : ''}</p>}

					<img className={'shadow'+ loading} src={pokemonInfo ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonInfo.id}.png`: Pokeball} alt="pokemon" />
					<img className={'image'+ loading} src={pokemonInfo ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonInfo.id}.png`: Pokeball} alt="pokemonShadow" />

				</div>
				<div id='info'>info</div>

				<div id='list'>
					<PokemonList team={team} setTeam={setTeam} selected={selected} setSelected={setSelected} />

				</div>
				<div id="search-bar">
					<p>SEARCH</p>
					<input type="text" />
				</div>
				<footer>Footer</footer>
			</section>
		</PokemonsContext.Provider>
	);
}
export default Pokedex;