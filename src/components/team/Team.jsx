import './teamStyling/Team.css'
const Team = ({ team, setTeam }) => {

	return (

		<section id='team-section'>
			<ul className='team'>
				{team.map((member) =>
					<li key ={member.id} className='ball'>
						<div className='inner-edge' />
						<div className='color' />
						<div className='lid'>
							<img className='sprite-shadow' src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${member.id}.png`} alt="pokemon" />
						</div>
						<img className='sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${member.id}.png`} alt="pokemon" />

						<div className='edge' />
						<input className='nickname' type='text' defaultValue={member.name}></input>
					</li>
				)}
			</ul>
		</section>
	);
}

export default Team;