import styled from 'styled-components'

const Container = styled.div`
    background-color: ${props => props.color};
    width: 40%;
    text-align: center;
    border-radius: 20px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    padding: 5px;

    span {
        font-size: 14px;
        color: white;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
`

const PokemonType = (props) => {
    let color = ""
    
    switch (props.types) {
        case 'bug':
            color = '#9ACD32'
            break
        case 'dragon':
            color = '#9370DB'
            break
        case 'fairy':
            color = '#DDA0DD'
            break
        case 'fire':
            color = '#FFA500'
            break
        case 'ghost':
            color = '#5c1191'
            break
        case 'ground':
            color = '#BDB76B'
            break
        case 'normal':
            color = '#DCDCDC'
            break
        case 'psychic':
            color = '#ff49ff'
            break
        case 'steel':
            color = '#C0C0C0'
            break
        case 'dark':
            color = '#402512'
            break
        case 'electric':
            color = '#ffe23c'
            break
        case 'fighting':
            color = '#FF4500'
            break
        case 'flying':
            color = '#9585f1'
            break
        case 'grass':
            color = '#58d258'
            break
        case 'ice':
            color = '#ADD8E6'
            break
        case 'poison':
            color = '#9841c3'
            break
        case 'rock':
            color = '#b9976c'
            break
        case 'water':
            color = '#1E90FF'
            break
    }

    const firstLetterUpper = (string) => {
        return string[0].toUpperCase() + string.slice(1)
    }

    return (
        <Container color={color}>
            <span>{firstLetterUpper(props.types)}</span>
        </Container>
    )
}

export default PokemonType