import { idOf, styledId, iconOf } from '../Helper'
import Pokeball from '../images/Pokeball.svg'
import './pokedexStyling/PokemonList.css'
const PokemonList = ({ team, selected, setSelected, pokemons, keyword }) => {

	return (
		<ul id ='pokemon-list'>
			{pokemons.filter(pokemon => pokemon.name.includes(keyword)).map(pokemon =>
				<li id= {`pokemon-list-item${idOf(pokemon) === selected ? '-selected' : ''}`} key={pokemon.name} onClick={() => setSelected(idOf(pokemon))}>
					<img id='pokeball' src={Pokeball} alt="pokeball" />
					<p id='item-id'>#{styledId(idOf(pokemon))} </p>
					<p id='item-name' className='name'> {pokemon.name}</p>
					<p id="inTeam"> {team.filter(member => member.id === idOf(pokemon)).length !== 0 ? 'IN TEAM' : ''} </p>
					<div id='item-shadow' />
					<img id={'item-icon'} src={iconOf(pokemon)} alt="icon" />
					<div id='li-shadow'></div>
				</li>
			)}
		</ul>
	);
}

export default PokemonList;