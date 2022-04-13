import { useState } from 'react'
import Pokeball from './Pokeball.svg'
import './Pokedex.css'
const PokemonListItems = ({ pokemons, selected, setSelected }) => {


	const idOf = (pokemon) => {
		let trimmed = pokemon.url.split('/')
		return trimmed[trimmed.length - 2]
	}
	const styledIdOf = (pokemon)=> {
		let id = idOf(pokemon)
		if (id <10) return '00'+id
		else if (id<100) return '0'+id
		else return id
	}
	const iconOf = (pokemon) => {		
		 return  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${idOf(pokemon)}.png`		
	}


	return (
		pokemons.map((pokemon) =>
		<li key={pokemon.name} onClick={() => setSelected(idOf(pokemon))}>
				<img id='pokeball' src={Pokeball} alt="pokeball" />
				<p id='id'>#{styledIdOf(pokemon)} </p>
				<p id='li-name' className='name'> {pokemon.name}</p>
				<div id ='shadow'/>
				<img id='icon' src={iconOf(pokemon)} alt="icon" />
				<div id='box-shadow'></div>

			</li>
		));
}

export default PokemonListItems;