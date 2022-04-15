import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import PokemonType from '../components/PokemonType'
import Stat from '../components/Stat'
import { RiArrowGoBackFill } from 'react-icons/ri'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: var(--white);
    
    .title {
        text-align: center;
        padding: 20px 0px 50px 0px;
    }
`

const PokemonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    .left {
        width: 350px;
    }

    .right {
        width: calc(1200px - 350px);
        padding: 0px 50px;
    }

    picture {
        svg {
            position: absolute;
            margin: 20px;
            font-size: 35px;
            cursor: pointer;
        }
    }

    img {
        width: 350px;
        background-color: var(--background);
        border-radius: 10px;
    }
`

const PokemonInfo = styled.div`
    background-color: var(--background);
    padding: 20px;
    border-radius: 5px;
    margin-top: 50px;

    .basicInfo {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p, li {
            font-size: 22px;
            color: var(--white);
        }
    }

    h3 {
        font-weight: 500;
        text-align: center;
    }

    h4 {
        font-weight: 400;
    }

    .pokemonType {
        display: flex;
        margin-top: 25px;
        justify-content: space-between;
        
        div {
            width: 45%;
            border-radius: 50px;
            margin-right: 10px;
        }

        span {
            font-size: 18px;
            padding: 5px;
        }
    }
`

const BaseStats = styled.div`
    width: 100%;
    background-color: var(--background);
    padding: 30px;
    border-radius: 5px;

    h3 {
        font-weight: 400;
        text-align: center;
    }

    .moveListContainer {
        display: flex;
        justify-content: space-between;
    }

    .moveList {
        display: flex;
        flex-direction: column;

        h3 {
            font-weight: 400;
            text-align: center;
        }

        li {
            font-size: 25px;
            margin: 5px 0px;
        }
    }
`

const PokemonPage = (props) => {
    const params = useParams()
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)
    const [isFront, setIsFront] = useState(true)

    const fetch = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            setPokemon(data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetch()
        props.setCurrentPage({
            text: 'Voltar',
            path: '/',
        })
    }, [])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <Container>
            <div className='title'>
                <h1>{pokemon.name.replace(/\b(\w)/g, s => s.toUpperCase())}</h1>
                <span>Nº{pokemon.id}</span>
            </div>
            <PokemonContainer>
                <div className='left'>
                    <picture>
                        <RiArrowGoBackFill onClick={() => setIsFront(!isFront)} />
                        <img src={isFront ? pokemon.sprites.front_default : pokemon.sprites.back_default} alt={pokemon.name} />
                    </picture>
                    <PokemonInfo>
                        <div className='basicInfo'>
                            <p>Height:</p>
                            <p>{pokemon.height} m</p>
                        </div>
                        <div className='basicInfo'>
                            <p>Weight:</p>
                            <p>{pokemon.weight} kg</p>
                        </div>
                        {pokemon.abilities.map((item, index) => (
                            <div className='basicInfo' key={index}>
                                <p>Abillity {index + 1}:</p>
                                <li>{item.ability.name || 'none'}</li>
                            </div>
                        ))}
                        
                    </PokemonInfo>
                    <PokemonInfo>
                        <h4>Types:</h4>
                        <div className='pokemonType'>
                            {pokemon.types.map(item => item.type.name).map((item, id) => (
                                <PokemonType key={id} types={item} />
                            ))}
                        </div>
                    </PokemonInfo>
                </div>
                <div className='right'>
                    <BaseStats>
                        <h3>Base Stats</h3>
                        <div>
                            <Stat name='HP' nameValue='hp' value={pokemon.stats[0].base_stat} />
                            <Stat name='Attack' nameValue='attack' value={pokemon.stats[1].base_stat} />
                            <Stat name='Defense' nameValue='defense' value={pokemon.stats[2].base_stat} />
                            <Stat name='S. Attack' nameValue='special' value={pokemon.stats[3].base_stat} />
                            <Stat name='S. Deffense' nameValue='special' value={pokemon.stats[4].base_stat} />
                            <Stat name='Speed' nameValue='speed' value={pokemon.stats[5].base_stat} />
                        </div>
                    </BaseStats>
                    <BaseStats style={{marginTop: '50px'}}>
                        <h3>Main Moves</h3>
                        <div className='moveListContainer'>
                            <ul className='moveList'>
                                <li>{pokemon.moves[0].move.name.replace(/\b(\w)/g, s => s.toUpperCase())}</li>
                                <li>{pokemon.moves[1].move.name.replace(/\b(\w)/g, s => s.toUpperCase())}</li>
                                <li>{pokemon.moves[2].move.name.replace(/\b(\w)/g, s => s.toUpperCase())}</li>
                            </ul>
                            <ul className='moveList'>
                                <li>{pokemon.moves[3].move.name.replace(/\b(\w)/g, s => s.toUpperCase())}</li>
                                <li>{pokemon.moves[4].move.name.replace(/\b(\w)/g, s => s.toUpperCase())}</li>
                                <li>{pokemon.moves[5].move.name.replace(/\b(\w)/g, s => s.toUpperCase())}</li>
                            </ul>
                            <ul className='moveList'>
                                <li>{pokemon.moves[6].move.name.replace(/\b(\w)/g, s => s.toUpperCase())}</li>
                                <li>{pokemon.moves[7].move.name.replace(/\b(\w)/g, s => s.toUpperCase())}</li>
                                <li>{pokemon.moves[8].move.name.replace(/\b(\w)/g, s => s.toUpperCase())}</li>
                            </ul>
                        </div>
                    </BaseStats>
                </div>
            </PokemonContainer>
        </Container>
    )
}

export default PokemonPage