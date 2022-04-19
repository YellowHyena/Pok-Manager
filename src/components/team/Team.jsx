import './teamStyling/Team.css'
const Team = ({ team, setTeam }) => {
	return (

		<section className='team'>
			<div className='ball' id="ball-1">
				<div className='inner-edge' />
				<div className='color' />
				<div className='lid'>
					<img className='sprite-shadow' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/890.png" alt="pokemon" />
				</div>
				<img className='sprite' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/890.png" alt="pokemon" />
				

				<div className='edge' />
				<div className='name'>fletchinder</div>
			</div>
		</section>
	);
}

export default Team;