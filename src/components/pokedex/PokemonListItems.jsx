import { useState } from 'react'
import Pokeball from './Pokeball.svg'
import './Pokedex.css'
const PokemonListItems = ({ pokemons, selected, setSelected }) => {


	const idOf = (pokemon) => {
		let trimmed = pokemon.url.split('/')
		return trimmed[trimmed.length - 2]
	}
	const iconOf = (pokemon) => {		
		 return  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${idOf(pokemon)}.png`		
	}


	return (
		pokemons.map((pokemon) =>
		<li key={pokemon.name} onClick={() => setSelected(pokemon)}>
				<img src={Pokeball} alt="pokeball" />
				<p>#{pokemon.id} </p>
				<p style={{ textTransform: 'uppercase' }}>{pokemon.name}</p>
				<img id='pokemon-icon' src={iconOf(pokemon)} alt="icon" />
			</li>
		));
}

export default PokemonListItems;