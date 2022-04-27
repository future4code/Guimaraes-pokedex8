import GlobalStyle from './globalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonPage from './pages/PokemonPage'
import { useState } from 'react'

const App = () => {
  const [currentPage, setCurrentPage] = useState({
    text: 'Ir para minha pokédex',
    path: '/pokedex',
  })

  return (
    <>
    <GlobalStyle />

    <BrowserRouter>
      <Header currentPage={currentPage} />
      <Routes>
        <Route index element={<Home setCurrentPage={setCurrentPage} />} />
        <Route path='/pokedex' element={<Pokedex setCurrentPage={setCurrentPage} />} />
        <Route path='/pokemon/:id' element={<PokemonPage setCurrentPage={setCurrentPage} />} />
      </Routes>
    </BrowserRouter>

    </>
  ) 
}

export default App;