import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.header`
    background-color: #16171b;
    color: var(--white);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h2 {
        font-size: 30px;
        font-weight: 500;
    }

    div {
        width: 250px;
    }
`

const Button = styled.button`
    background-color: white;
    border: none;
    height: 65%;
    font-size: 18px;
    width: 250px;
    border-radius: 10px;
    transition: all 0.2s ease;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    :hover {
        background-color: #a7a7a7;
    }

    :active {
        background-color: #9d9d9d;
    }
`

const Header = (props) => {
    const navigate = useNavigate()

    return (
        <Container>
            <Button onClick={() => navigate(props.currentPage.path)}>{props.currentPage.text}</Button>
            <h2>Pokémon List</h2>
            <div />
        </Container>
    )
}

export default Header