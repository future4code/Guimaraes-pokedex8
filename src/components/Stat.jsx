import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;

    p {
        font-size: 25px;
        width: 200px;
    }
`

const BarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        padding: 00px 15px;
        font-size: 20px;
        font-weight: 200;
    }

    #barContainer {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        background-color: #80808033;
    }
`

const Bar = styled.div`
    background-color: ${props => props.color};
    height: 20px;
    width: ${props => `${props.percent}%`};
`

const Stat = (props) => {
    const [styles, setStyles] = useState({})

    const statConvert = {
        hp: 1.6,
        attack: 1.34,
        defense: 1.8,
        speed: 1.4,
        special: 1.54,
    }

    const convert = (value, statConvert) => {
        const percent = value / statConvert
        const color = colorConvert(percent)
        setStyles({
            percent: percent,
            color: color
        })
    }

    const colorConvert = (percent) => {
        if (percent > 85) {
            return '#00bfff'
        } else if (percent > 75) {
            return '#00ff37' 
        } else if (percent > 55) {
            return '#b3ff00'
        } else if (percent > 40) {
            return '#eeff00'
        } else if (percent > 30) {
            return '#ffb300'
        } else if (percent > 15) {
            return '#ff6200'
        } else {
            return '#ff0000'
        }
    }

    const onMount = () => {
        switch (props.nameValue) {
            case 'hp':
                convert(props.value, statConvert.hp)
                break
            case 'attack':
                convert(props.value, statConvert.attack)
                break
            case 'defense':
                convert(props.value, statConvert.defense)
                break
            case 'speed':
                convert(props.value, statConvert.speed)
                break
            case 'special':
                convert(props.value, statConvert.special)
                break
        }
    }

    useEffect(() => {
        onMount()
    }, [])

    console.log(styles)

    return (
        <Container>
            <p>{props.name}:</p>
            <BarContainer>
                <span>Mín</span>
                <div id='barContainer'>
                    <Bar percent={styles.percent} color={styles.color} />
                </div>
                <span>Max</span>
            </BarContainer>
        </Container>
    )
}

export default Stat