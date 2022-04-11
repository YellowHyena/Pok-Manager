import { useState, useEffect } from 'react'
import './Team.css'

const Team = ({ team, setTeam }) => {
	const [pokemons, setPokemons] = useState([])

	const getPokemons = (async () => {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		const data = await response.json()
		getIndividualPokemon(data.results)
	})

	const getIndividualPokemon = (async (pokemons) => {
		console.log(pokemons.length);

		for (let i = 0; i < pokemons.length; i++) {
			const response = await fetch(pokemons[i].url)
			const data = await response.json()
			addPokemon(data)
		}
		console.log(pokemons);
	})
	const addPokemon = (pokemon) => {
		let newPokemon = [...pokemons]
		newPokemon.push(pokemon)
		setPokemons(newPokemon)
	}

	// useEffect(getPokemons, [])???


	const pokeTemp =[]
	for (let i = 0; i < 100; i++) {
		pokeTemp.push({name: 'pokemon ' + i, url: 123})
	}



	return (
		<section id="page">
			<div id='pokemon'>
				<section className='name'>Name, type</section>
				<section> </section>
			</div>
			<div id='info'>info</div>
			<div id='list'>
				<div className="list-container">
					<ul>
						{/* {pokemons.map((pokemon) =>
							(<li key={pokemon.name}>{pokemon.name}</li>)
						)} */}
						{pokeTemp.map((pokemon) =>
							(<li key={pokemon.name}>{pokemon.name}</li>)
						)}
					</ul>
				</div>
			</div>
			<footer>Footer</footer>
		</section>
	);
}

export default Team;