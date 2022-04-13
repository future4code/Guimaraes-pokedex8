import styled from 'styled-components'
import GlobalStyle from './globalStyles'
import PokemonCard from './components/PokemonCard'

const Container = styled.div`
  display: flex;
`

const App = () => {
  return (
    <>
    <GlobalStyle />

    <Container>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </Container>
    <Container>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </Container>
    </>
  ) 
}

export default App;