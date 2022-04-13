import styled from 'styled-components'
import GlobalStyle from './globalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonPage from './pages/PokemonPage'

const App = () => {
  return (
    <>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokemon/:id' element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>

    </>
  ) 
}

export default App;