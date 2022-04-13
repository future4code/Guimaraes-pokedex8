import styled from 'styled-components'
import PokemonType from './PokemonType'

const Container = styled.div`

    :hover {
        > div {
            background-color: #fcfcfc;
            box-shadow: rgba(50, 50, 93, 0.20) 0px 2px 5px -1px, rgba(0, 0, 0, 0.25) 0px 1px 3px -1px;
        }

        button {
            opacity: 100%;
            transform: translateY(0px);
            visibility: initial;
        }
    }
`

const AddButton = styled.button`
    position: absolute;
    margin-left: 55px;
    border: none;
    background-color: #00a9e1;
    color: white;
    padding: 5px 20px 10px 20px;
    font-size: 17px;
    border-radius: 0px 0px 25px 25px;
    transition: all 0.2s ease;
    visibility: hidden;
    opacity: 0%;
    transform: translateY(-25px);

    :hover {
        background-color: #09c1ff;
    }

    :active {
        background-color: #00a9e1;
        margin-left: 60px;
        font-size: 15px;
    }
`

const PokeInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 15px;
    border-radius: 10px;
    transition: all 0.25s ease;
    cursor: pointer;

    img {
        background-color: #e8e8e8;
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
        padding-bottom: 6px;
        font-weight: 600;
        font-size: 28px;
    }
`

const TypeContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const PokemonCard = () => {
    const pokemonType = [
        {name: 'water'},
        {name: 'flying'},
    ]

    return (
        <Container>
            <AddButton onClick={() => console.log('button')}>Adicionar</AddButton>
            <PokeInfo onClick={() => console.log('container')}>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png' alt='Gyarados' />
                <span className='number'>Nº 130</span>
                <h3>Gyarados</h3>
                <TypeContainer>
                    {pokemonType.map((type, id) => (
                        <PokemonType key={id} types={type.name} />
                    ))}
                </TypeContainer>
            </PokeInfo>
        </Container>
    )
}

export default PokemonCard