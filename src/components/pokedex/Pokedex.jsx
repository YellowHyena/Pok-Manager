import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import './Pokedex.css'
import Sanck from './Sanck.png'

const Pokedex = (team, setTeam) => {
	const [pokemons, setPokemons] = useState([])
	const [selected, setSelected] = useState(1)
	const [pokemonInfo, setPokemonInfo] = useState([''])
	const [fetchedPokemons, setFetchedPokemons] = useState([])


	const checkNFetch = (async () => {
		if (!fetchedPokemons.some(p => p.id === selected)) {
			console.log('fetching info for:', selected)
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${selected}/`)
			const data = await response.json()

			let newEntry = [...fetchedPokemons]
			newEntry.push(data)
			setFetchedPokemons(newEntry)
		}
	})

	const getPokemonInfo = () => {
		const filteredPokemon = fetchedPokemons.filter((pokemon => pokemon.name === selected.name))
		setPokemonInfo(filteredPokemon)
		console.log(filteredPokemon);
	}


	useEffect(() => {
		checkNFetch()
	}, [selected])

	useEffect(() => {
		console.log('fetched pokemon info');
		console.log(fetchedPokemons);
		getPokemonInfo()
	}, [fetchedPokemons])

	return (
		<section id="page">
			<div id='pokemon'>
				<p id='info-name' className='name'>Name: {pokemonInfo.name} <br /> Number: {pokemonInfo.id}</p>


				<img className='shadow' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${selected}.png`} alt="pokemon" />
				<img className='image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${selected}.png`} alt="pokemon" />

			</div>
			<div id='info'>info</div>

			<div id='list'>

				<PokemonList team={team} setTeam={setTeam} pokemons={pokemons} setPokemons={setPokemons} selected={selected} setSelected={setSelected} fetchedPokemons={fetchedPokemons} setFetchedPokemons={setFetchedPokemons} />
			</div>
			<div id="search-bar">
				<p>SEARCH</p> 
				<input type="text" />
			</div>
			<footer>Footer</footer>
		</section>
	);
}
export default Pokedex;