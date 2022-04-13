import { useEffect } from 'react'
import PokemonListItems from './PokemonListItems'
const PokemonList = ({ Team, setTeam, pokemons, setPokemons, selected, setSelected, fetchedPokemons, setFetchedPokemons}) => {

	const getPokemons = (async () => {
		console.log('fetching pokemons')
		const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=20000')
		const data = await response.json()
		console.log('fetched', data);
		setPokemons(data.results)
		// getIndividualPokemon(data.results)
	})

	// const getIndividualPokemon = (async (pokemons) => {
	// 	console.log(pokemons.length);

	// 	for (let i = 0; i < pokemons.length; i++) {
	// 		const response = await fetch(pokemons[i].url)
	// 		const data = await response.json()
	// 		addPokemon(data)
	// 	}
	// 	console.log(pokemons);
	// })
	// const addPokemon = (pokemon) => {
	// 	let newPokemon = [...pokemons]
	// 	newPokemon.push(pokemon)
	// 	setPokemons(newPokemon)
	// }

	useEffect(getPokemons, [])

	return (
		<section>

			<ul>
				<PokemonListItems pokemons ={pokemons} selected = {selected} setSelected ={setSelected} />
			</ul>
		</section>
	);
}

export default PokemonList;