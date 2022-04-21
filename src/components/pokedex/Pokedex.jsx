import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import './pokedexStyling/Pokedex.css'
import SearchBar from './SearchBar';
import PokemonInfo from './PokemonInfo';

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
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selected}/`)
			const data = await response.json()
			let newEntry = [...PokemonInfoCache]
			newEntry.push(data)
			console.log(data);
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



	return (
		<section id="page">
			<div id='pokemon'>
			<PokemonInfo pokemonInfo={pokemonInfo} loading={loading} team={team} setTeam={setTeam} />
			</div>

			<div id='info'>
				<ul id='info-abilities'> ABILITIES:
					{pokemonInfo ? pokemonInfo.abilities.map(index =>
						<li>
							<p>{'-'+index.ability.name}</p>
						</li>
					) : null}

				</ul>
			</div>

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