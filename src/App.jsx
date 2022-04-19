import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import Home from './components/home/Home'
import Pokedex from './components/pokedex/Pokedex'
import Team from './components/team/Team'
import PokemonsContext from './components/contexts/pokemonsContext'
import './App.css'


function App() {

  const [team, setTeam] = useState([{id: 0, name: ''}])
  const [pokemons, setPokemons] = useState([])
  const context = { pokemons }

  return (
    <PokemonsContext.Provider value={context}>
      <Router>
        <div>
          <header>
            <NavLink className={'nav-link'} to=""> Home </NavLink>


            <NavLink className={'nav-link'} to="/pokedex"> Pokédex </NavLink>


            <NavLink className={'nav-link'} to="/team"> Team </NavLink>

          </header>
          <main>
            <Routes>
              <Route path='/team' element={<Team team={team} setTeam={setTeam} />} />
              <Route path='/pokedex' element={<Pokedex team={team} setTeam={setTeam} pokemons ={pokemons} setPokemons={setPokemons} />} />
              <Route path='' element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </PokemonsContext.Provider>
  )
}

export default App
