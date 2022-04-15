import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PokemonType from './PokemonType'

const Container = styled.div`
    width: 200px;

    :hover {
        > #infoContainer {
            background-color: #fcfcfc1b;
            box-shadow: rgba(50, 50, 93, 0.20) 0px 2px 5px -1px, rgba(0, 0, 0, 0.25) 0px 1px 3px -1px;
        }

        button {
            opacity: 100%;
            font-size: 17px;
            visibility: initial;
        }
    }
`

const AddButton = styled.button`
    position: absolute;
    margin-left: 55px;
    border: none;
    background-color: #16171bb3;
    color: white;
    padding: 5px 20px 10px 20px;
    border-radius: 0px 0px 25px 25px;
    transition: all 0.2s ease;
    visibility: hidden;
    opacity: 0%;
    font-size: 0px;

    :hover {
        background-color: #1b1b1b;
    }

    :active {
        background-color: #16171bb3;
        margin-left: 60px;
    }
`

const PokeInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    transition: all 0.25s ease;
    cursor: pointer;

    img {
        background-color: #16171b6b;
        width: 200px;
        height: 200px;
        border-radius: 5px;
    }

    .number {
        padding-top: 5px;
        text-align: center;
        font-size: 15px;
    }

    h3 {
        text-align: center;
        margin: 0;
        padding-bottom: 10px;
        font-weight: 600;
        font-size: 28px;
    }
`

const TypeContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const PokemonCard = (props) => {
    const navigate = useNavigate()

    const pokemonTypes = props.types.map(item => item.type.name)

    return (
        <Container>
            <AddButton onClick={() => console.log('button')}>Adicionar</AddButton>
            <PokeInfo id='infoContainer' onClick={() => navigate(`/pokemon/${props.id}`)}>
                
                <img src={props.image} alt={props.name} />
                <span className='number'>Nº {props.id}</span>
                <h3>{props.name.replace(/\b(\w)/g, s => s.toUpperCase())}</h3>

                <TypeContainer>
                    {pokemonTypes.map((type, id) => (
                        <PokemonType key={id} types={type} />
                    ))}
                </TypeContainer>

            </PokeInfo>
        </Container>
    )
}

export default PokemonCard