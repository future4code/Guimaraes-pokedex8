import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
        background-color: #272b32;
    }

    button {
        font-family: 'Raleway', sans-serif;
        cursor: pointer;
    }

    select {
        font-family: 'Raleway', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle