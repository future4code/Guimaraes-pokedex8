import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'
import PokemonCard from '../components/PokemonCard'
import { usePokemonList } from '../providers/index'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 80px);
    font-size: calc(10px + 2vmin);
    color: white;
    margin-bottom: 50px;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;

    h1 {
        font-weight: 500;
    }

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

const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 50px 0px;
`

const Home = (props) => {
    const { pokemonList, setPokemonList, pokedexList } = usePokemonList()
    const [limit, setLimit] = useState(20)

    const fetch = async () => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            const newArrayPokemon = []

            for (let pokemon of data.results) {
                const { data } = await axios.get(pokemon.url)
                newArrayPokemon.push(data)
            }

            setPokemonList(newArrayPokemon)

        } catch (err) {
            console.log(err)
        }
    }

    const reachedBottom = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            let newLimit = limit + 20
            if (newLimit > 151) {
                newLimit = 151
            }
            setLimit(newLimit)
        }
    }
    
    const checkIfInPokedex = (order) => {
        let pokedexOrder = []
        for (let pokemon of pokedexList) {
            pokedexOrder.push(pokemon.order)
        }

        if (pokedexOrder.includes(order)) return true
        if (!pokedexOrder.includes(order)) return false
    }

    useEffect(() => {
        window.addEventListener('scroll', reachedBottom)
        fetch()
        props.setCurrentPage({
            text: 'Ir para minha pok??dex',
            path: '/pokedex',
        })
    }, [limit])

    return (
        <Container>
            <Title>
                <h1>Pok??mon</h1>
                <select>
                    <option>N??mero crescente</option>
                    <option>N??mero decrescente</option>
                    <option>Ordem alfabetica</option>
                </select>
            </Title>
            <PokemonDisplay>
                {pokemonList.map((pokemon, index) => (
                    <PokemonCard
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        types={pokemon.types}
                        image={pokemon.sprites.front_default}
                        pokemon={pokemon}
                        remove={checkIfInPokedex(pokemon.order)}
                    />
                ))}
            </PokemonDisplay>
            {limit < 151 ? (
                <LoadingContainer>
                    <Loading />
                </LoadingContainer>
            ) : null}
        </Container>
    )
}

export default Home