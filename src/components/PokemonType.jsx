import styled from 'styled-components'

const Container = styled.div`
    background-color: ${props => props.color};
    width: 40%;
    text-align: center;
    border-radius: 20px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 13px;
        color: lightgray;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
`

const PokemonType = (props) => {
    let color = ""
    
    switch (props.types) {
        case 'bug':
            color = '#99cd32a4'
            break
        case 'dragon':
            color = '#9470dbb0'
            break
        case 'fairy':
            color = '#dda0ddb2'
            break
        case 'fire':
            color = '#ffa600b7'
            break
        case 'ghost':
            color = '#5c1191b9'
            break
        case 'ground':
            color = '#bdb76bb7'
            break
        case 'normal':
            color = '#dcdcdcae'
            break
        case 'psychic':
            color = '#ff49ffb0'
            break
        case 'steel':
            color = '#c0c0c0ae'
            break
        case 'dark':
            color = '#402512b1'
            break
        case 'electric':
            color = '#ffe23cae'
            break
        case 'fighting':
            color = '#ff4400b3'
            break
        case 'flying':
            color = '#9585f1a5'
            break
        case 'grass':
            color = '#58d258ad'
            break
        case 'ice':
            color = '#add8e6b6'
            break
        case 'poison':
            color = '#9841c3b7'
            break
        case 'rock':
            color = '#b9986cbb'
            break
        case 'water':
            color = '#1e8fffb2'
            break
    }

    return (
        <Container color={color}>
            <span>{props.types.replace(/\b(\w)/g, s => s.toUpperCase())}</span>
        </Container>
    )
}

export default PokemonType