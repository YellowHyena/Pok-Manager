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

	// fetches pokemon names and urls
	const getPokemons = (async () => {
		console.log('fetching pokemons')
		const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=20000')
		const data = await response.json()
		console.log('fetched', data.results.length, 'pokemons');
		setPokemons(data.results)
	})

	//if pokemon info has been fetched before; gets it, else; fetches and stores it in pokemonInfoCashe
	const checkNFetch = (async () => {
		if (!PokemonInfoCache.some(p => p.id === selected)) {
			console.log('fetching info for id', selected)
			setLoading('-loading')
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selected}/`)
			const data = await response.json()
			let newEntry = [...PokemonInfoCache]
			newEntry.push(data)
			setPokemonInfoCache(newEntry)
		}
		else getPokemonInfo()
	})
	//fetches info of selected pokemon from cache
	const getPokemonInfo = () => {
		const foundPokemon = PokemonInfoCache.find((pokemon => pokemon.id === selected))
		foundPokemon ? console.log('found', foundPokemon.name) : console.log('could not find pokemon');
		setPokemonInfo(foundPokemon)
	}

	//fetches all pokemon once when rendered
	useEffect(() => { if (pokemons.length == 0) getPokemons() }, [])

	//if a pokemon is selected, check if info is fetched
	useEffect(() => {
		console.log('selected id', selected);
		if (selected) checkNFetch()
	}, [selected])

	//if pokemonCashe was updated; get pokemon info
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
						<li key={index.ability.name}>
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