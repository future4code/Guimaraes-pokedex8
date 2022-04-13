import styled from 'styled-components'
import GlobalStyle from './globalStyles'
import PokemonCard from './components/PokemonCard'

const App = () => {
  return (
    <>
    <GlobalStyle />

    <Container>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </Container>
    </>
  ) 
}

export default App;