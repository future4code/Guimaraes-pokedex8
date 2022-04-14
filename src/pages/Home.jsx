import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PokemonCard from '../components/PokemonCard'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;

    select {
        height: 50px;
        border: none;
        background-color: #16171b;
        color: lightgray;
        padding: 10px;
        border-radius: 10px;
        font-size: 15px;
    }
`

const PokemonDisplay = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(230px, 1fr));
`

const Home = (props) => {
    useEffect(() => {
        props.setCurrentPage({
            text: 'Ir para minha pokédex',
            path: '/pokedex',
        })
    }, [])

    return (
        <Container>
            <Title>
                <h1>Pokémons</h1>
                <select>
                    <option>Número crescente</option>
                    <option>Número decrescente</option>
                    <option>Ordem alfabetica</option>
                </select>
            </Title>
            <PokemonDisplay>
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </PokemonDisplay>
        </Container>
    )
}

export default Home