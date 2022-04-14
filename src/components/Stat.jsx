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
    background-color: green;
    height: 20px;
    width: 25%;
`

const Stat = (props) => {
    return (
        <Container>
            <p>{props.name}:</p>
            <BarContainer>
                <span>Mín</span>
                <div id='barContainer'>
                    <Bar />
                </div>
                <span>Max</span>
            </BarContainer>
        </Container>
    )
}

export default Stat