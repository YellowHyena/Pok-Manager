import './teamStyling/Team.css'
const Team = ({ team, setTeam }) => {

	//updates the nickname, duh
	const updateNickname = (member, index, e) => {
		let newTeam = [...team]
		newTeam[index] = { id: member.id, name: e.target.value }
		setTeam(newTeam)
	}

	//returns empty balls based on team size
	const EmptyBalls = () => {
		const balls = []
		for (let i = 0; i <  6 - team.length; i++) {
			balls.push(
				<li key={'empty-ball-' + i} className='ball'>
					<div className='middle' />
					<div className='color' />
					<div className='lid'></div>
					<div className='edge' />
				</li>
			)
		}
		console.log('empty balls =', balls.length );
		return balls
	}
	return (
		<section id='team-section'>
			<ul className='team'>
				{team.map((member, index) =>
					<li key={member.id} className='ball'>
						<div className='middle' />
						<div className='color' />
						<div className='lid'>
							<img className='sprite-shadow' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${member.id}.png`} alt="pokemon" />
						</div>
						<img className='sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${member.id}.png`} alt="pokemon" />
						<div className='edge' />
						<input className='nickname' type='text' defaultValue={member.name} onChange={(e) => updateNickname(member, index, e) + console.log(member.name)} ></input>
					</li>
				)}
				{EmptyBalls()}
			</ul>
		</section >
	);
}

export default Team;