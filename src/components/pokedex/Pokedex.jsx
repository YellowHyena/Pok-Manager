import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import './Pokedex.css'
import Sanck from './Sanck.png'

const Pokedex = (team, setTeam) => {
	const [pokemons, setPokemons] = useState([])
	const [selected, setSelected] = useState([{name: '', id: ''}])
	const [fetchedPokemons, setFetchedPokemons] =useState([])

	
	useEffect(() => {
		console.log(selected);
	}, [selected])


	return (
		<section id="page">
			<div id='pokemon'>
				<p className='name'>Name: {selected.name} <br /> Pokédex Number: {selected.id}</p>


				<img className='shadow' src={Sanck} alt="pokemon" />
				<img className='image' src={Sanck} alt="pokemon" />

			</div>
			<div id='info'>info</div>
			<div id='list'>
				<PokemonList team={team} setTeam={setTeam} pokemons={pokemons} setPokemons={setPokemons} selected={selected} setSelected={setSelected} fetchedPokemons={fetchedPokemons} setFetchedPokemons={setFetchedPokemons}/>
			</div>
			<footer>Footer</footer>
		</section>
	);
}
export default Pokedex;