import { useContext } from 'react'
import PokemonsContext from '../contexts/pokemonsContext'
import { idOf, styledIdOf, iconOf } from '../Helper'
import Pokeball from '../images/Pokeball.svg'
import './Pokedex.css'
import './pokedexStyling/PokemonList.css'

const PokemonListItems = ({ selected, setSelected }) => {
	const { pokemons } = useContext(PokemonsContext)

	return (
		pokemons.map((pokemon) =>
			<li key={pokemon.name} onClick={() => setSelected(idOf(pokemon)) + console.log('selected', selected)}>
				<img id='pokeball' src={Pokeball} alt="pokeball" />
				<p id='item-id'>#{styledIdOf(pokemon)} </p>
				<p id='item-name' className='name'> {pokemon.name}</p>
				<div id='item-shadow' />
				<img id='item-icon' src={iconOf(pokemon)} alt="icon" />
				<div id='li-shadow'></div>
			</li>
		));
}

export default PokemonListItems;