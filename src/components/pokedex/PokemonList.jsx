import { useEffect } from 'react'
import PokemonListItems from './PokemonListItems'
const PokemonList = ({ Team, setTeam, pokemons, setPokemons, selected, setSelected, fetchedPokemons, setFetchedPokemons }) => {

	const getPokemons = (async () => {
		console.log('fetching pokemons')
		const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=20000')
		const data = await response.json()
		console.log('fetched', data.results.length, 'pokemons');
		setPokemons(data.results)
	})

	useEffect(getPokemons, [])

	return (
		<section>
			<div className='div'>
				<ul>
					<PokemonListItems pokemons={pokemons} selected={selected} setSelected={setSelected} />
				</ul>
			</div>

		</section>
	);
}

export default PokemonList;