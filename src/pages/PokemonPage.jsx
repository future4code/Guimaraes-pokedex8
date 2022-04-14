import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PokemonType from '../components/PokemonType'
import Stat from '../components/Stat'

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

        p {
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
    const [imageSide, setImageSide] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png')
    const pokemonType = [
        {name: 'water'},
        {name: 'flying'},
    ]

    useEffect(() => {
        props.setCurrentPage({
            text: 'Voltar',
            path: '/',
        })
    }, [])

    return (
        <Container>
            <div className='title'>
                <h1>Gyarados</h1>
                <span>Nº130</span>
            </div>
            <PokemonContainer>
                <div className='left'>
                    <img src={imageSide} alt='Gyarados' />
                    <PokemonInfo>
                        <div className='basicInfo'>
                            <p>Height:</p>
                            <p>7.3 m</p>
                        </div>
                        <div className='basicInfo'>
                            <p>Weight:</p>
                            <p>235.0 kg</p>
                        </div>
                        <div className='basicInfo'>
                            <p>Abilities:</p>
                            <p>Intimidate</p>
                        </div>
                    </PokemonInfo>
                    <PokemonInfo>
                        <h4>Types:</h4>
                        <div className='pokemonType'>
                            {pokemonType.map((type, id) => (
                                <PokemonType key={id} types={type.name} />
                            ))}
                        </div>
                    </PokemonInfo>
                </div>
                <div className='right'>
                    <BaseStats>
                        <h3>Base Stats</h3>
                        <div>
                            <Stat name='HP' nameValue='hp' value={95} />
                            <Stat name='Attack' nameValue='attack' value={125} />
                            <Stat name='Defense' nameValue='defense' value={79} />
                            <Stat name='S. Attack' nameValue='special' value={60} />
                            <Stat name='S. Deffense' nameValue='special' value={100} />
                            <Stat name='Speed' nameValue='speed' value={81} />
                        </div>
                    </BaseStats>
                    <BaseStats style={{marginTop: '50px'}}>
                        <h3>Main Moves</h3>
                        <div className='moveListContainer'>
                            <ul className='moveList'>
                                <li>Headbutt</li>
                                <li>Tackle</li>
                                <li>Body-slam</li>
                            </ul>
                            <ul className='moveList'>
                                <li>Headbutt</li>
                                <li>Tackle</li>
                                <li>Body-slam</li>
                            </ul>
                            <ul className='moveList'>
                                <li>Headbutt</li>
                                <li>Tackle</li>
                                <li>Body-slam</li>
                            </ul>
                        </div>
                    </BaseStats>
                </div>
            </PokemonContainer>
        </Container>
    )
}

export default PokemonPage