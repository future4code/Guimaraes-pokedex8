import { useEffect } from 'react'
import styled from 'styled-components'
import PokemonCard from '../components/PokemonCard'
import { usePokemonList } from '../providers/index'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 80px);
    font-size: calc(10px + 2vmin);
    color: white;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;

    h1 {
        font-weight: 500;
    }
`

const PokemonDisplay = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(230px, 1fr));
`

const NoneDisplay = styled.div`
    width: 100%;
    height: calc(90vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h2 {
        font-size: 50px;
        font-weight: 400;
    }

    img {
        max-width: 100px;
    }
`

const Pokedex = (props) => {
    const { pokedexList } = usePokemonList()

    useEffect(() => {
        props.setCurrentPage({
            text: 'Voltar',
            path: '/',
        })
    }, [])

    return (
        <Container>
            {pokedexList.length === 0 ? (
                <NoneDisplay>
                    <h2>No pokémon found</h2>
                    <img src='https://art.pixilart.com/f9e9fb03bf7c4d5.png' alt='Confused Pikachu' />
                </NoneDisplay>
            ) : (
                <>
                <Title>
                    <h1>Pokedex</h1>
                </Title>
                <PokemonDisplay>
                    {pokedexList.map((pokemon, index) => (
                    <PokemonCard 
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        types={pokemon.types}
                        image={pokemon.sprites.front_default}
                        pokemon={pokemon}
                        remove={true}
                    />
                    ))}
                </PokemonDisplay>
                </>
            )}
        </Container>
    )
}

export default Pokedex