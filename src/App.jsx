import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Pokedex from './components/pokedex/Pokedex'
import Team from './components/team/Team'

function App() {

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
            <Route path='/team' element={<Team/>} />
            <Route path='/pokedex' element ={<Pokedex/>}/>
            <Route path='' element={<Home/>} />
          </Routes>
        </main>
      </div>


    </Router>
  )
}

export default App
