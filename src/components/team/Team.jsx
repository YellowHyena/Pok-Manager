import './teamStyling/Team.css'
const Team = ({ team, setTeam }) => {

	const updateNickname = (member, index) => e => {
		let newTeam = [...team]
		newTeam[index] = { id: member.id, name: e.target.value }
		setTeam(newTeam)
	}

	const renderBalls = () => {
		const balls = []
		for (let i = 0; i < 6; i++) {
			const member = team[i]
			if (member) {
				balls.push(
					<li key={member.name} className='ball'>
						<div className='middle' />
						<div className='color' />
						<div className='lid'>
							<img className='sprite-shadow' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${member.id}.png`} alt="pokemon" />
						</div>
						<img className='sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${member.id}.png`} alt="pokemon" />

						<div className='edge' />
						<input className='nickname' type='text' defaultValue={member.name} onChange={() => updateNickname(member, index) + console.log(member.name)} ></input>
					</li>
				)
			}
			else balls.push(
				<li key={'empty-ball-'+i} className='ball'>
					<div className='middle' />
					<div className='color' />
					<div className='lid'></div>
					<div className='edge' />
				</li>
			)
		}
		return balls
	}
	return (
		<section id='team-section'>
			<ul className='team'>
				{renderBalls()}
				{/* {team.map((member, index) =>
					<li key={member.id} className='ball'>
						<div className='' />
						<div className='color' />
						<div className='lid'>
							<img className='sprite-shadow' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${member.id}.png`} alt="pokemon" />
						</div>
						<img className='sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${member.id}.png`} alt="pokemon" />

						<div className='edge' />
						<input className='nickname' type='text' defaultValue={member.name} onChange={() => updateNickname(member, index) + console.log(member.name)} ></input>
					</li>
				)} */}
			</ul>
		</section>
	);
}

export default Team;