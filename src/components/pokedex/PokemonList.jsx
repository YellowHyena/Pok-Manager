import { idOf, styledIdOf, iconOf } from '../Helper'
import Pokeball from '../images/Pokeball.svg'
import './pokedexStyling/PokemonList.css'
const PokemonList = ({ Team, setTeam, selected, setSelected, pokemons, keyword }) => {
	return (
		<ul>
			{pokemons.map((pokemon) => {
				if ((pokemon.name.includes(keyword)) || (keyword === '')) {
					return (<li key={pokemon.name} onClick={() => setSelected(idOf(pokemon)) + console.log('selected', selected)}>
						<img id='pokeball' src={Pokeball} alt="pokeball" />
						<p id='item-id'>#{styledIdOf(pokemon)} </p>
						<p id='item-name' className='name'> {pokemon.name}</p>
						<div id='item-shadow' />
						<img id='item-icon' src={iconOf(pokemon)} alt="icon" />
						<div id='li-shadow'></div>
					</li>)
				}
			})}
		</ul>
	);
}

export default PokemonList;