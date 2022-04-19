import PokemonListItems from './PokemonListItems'
import './pokedexStyling/PokemonList.css'
const PokemonList = ({ Team, setTeam, selected, setSelected}) => {
	return (
		<section>
			<div className='div'>
				<ul>
					<PokemonListItems selected={selected} setSelected={setSelected} />
				</ul>
			</div>

		</section>
	);
}

export default PokemonList;