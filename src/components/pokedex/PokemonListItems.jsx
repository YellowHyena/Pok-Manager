import { useContext } from 'react'
import PokemonsContext from '../contexts/pokemonsContext'
import { idOf, styledIdOf, iconOf } from '../Helper'
import Pokeball from '../images/Pokeball.svg'
import './Pokedex.css'

const PokemonListItems = ({ selected, setSelected }) => {
	const { pokemons } = useContext(PokemonsContext)

	return (
		pokemons.map((pokemon) =>
			<li key={pokemon.name} onClick={() => setSelected(idOf(pokemon)) + console.log('selected', selected)}>
				<img id='pokeball' src={Pokeball} alt="pokeball" />
				<p id='id'>#{styledIdOf(pokemon)} </p>
				<p id='li-name' className='name'> {pokemon.name}</p>
				<div id='shadow' />
				<img id='icon' src={iconOf(pokemon)} alt="icon" />
				<div id='box-shadow'></div>
			</li>
		));
}

export default PokemonListItems;