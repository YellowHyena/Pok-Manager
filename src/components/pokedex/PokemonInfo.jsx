import './pokedexStyling/PokemonInfo.css'
import Pokeball from '../images/Pokeball.svg'
import { styledId } from '../Helper';

const PokemonInfo = ({ pokemonInfo, loading, team, setTeam}) => {

	const toggleTeamMember = () => {
		if (team.filter(member => member.id === pokemonInfo.id).length == 0 && team.length < 6) {
			let newTeam = [...team]
			newTeam.push({ id: pokemonInfo.id, name: pokemonInfo.name })
			setTeam(newTeam)
			console.log('added to team');
		}
		else if (!team.filter(member => member.id === pokemonInfo.id).length == 0) {
			let newTeam = team.filter(member => member.id !== pokemonInfo.id)
			setTeam(newTeam)
			console.log('removed from team');
		}
		else console.log('team is full', team.length);
	}

	return (
		<div>
			<p id='info-name'>{pokemonInfo ? pokemonInfo.name : ''} <br /> {pokemonInfo ? 'No.' + styledId(pokemonInfo.id) : ''}</p>
			<img className={'shadow' + loading} src={pokemonInfo ? pokemonInfo.sprites.other.home.front_default : Pokeball} alt="pokemon" />
			<img className={'image' + loading} src={pokemonInfo ? pokemonInfo.sprites.other.home.front_default : Pokeball} alt="pokemonShadow" />
			<button className='team-btn' onClick={toggleTeamMember} > {pokemonInfo ? team.filter(member => member.id === pokemonInfo.id).length === 0 ? 'ADD TO TEAM' : 'REMOVE FROM TEAM' : 'PLEASE SELECT A POKEMON'}</button>
		</div>);
}

export default PokemonInfo;