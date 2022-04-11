import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/home/Home'
import Pokedex from './components/pokedex/Pokedex'
import Team from './components/team/Team'
import './App.css'


function App() {

  const [team,setTeam] = useState([])

  return (
    <Router>
      <div>
        <header>
          <NavLink to=""> Home </NavLink>
          <NavLink to="/pokedex"> Pokédex </NavLink>
          <NavLink to="/team"> Team </NavLink>
        </header>
        <main>
          <Routes>
            <Route path='/team' element={<Team team = {team} setTeam = {setTeam}/>} />
            <Route path='/pokedex' element ={<Pokedex  team = {team} setTeam = {setTeam}/>}/>
            <Route path='' element={<Home/>} />
          </Routes>
        </main>
      </div>


    </Router>
  )
}

export default App
