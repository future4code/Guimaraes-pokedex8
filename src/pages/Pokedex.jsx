import { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const Pokedex = (props) => {
    useEffect(() => {
        props.setCurrentPage({
            text: 'Voltar',
            path: '/',
        })
    }, [])

    return (
        <Container>
            Pokedex
        </Container>
    )
}

export default Pokedex