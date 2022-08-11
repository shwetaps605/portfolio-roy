import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body {
    background-color:#1B0A3C;
}

:root {
    large-font:25px;
    medium-font:18px;
    small-font:12px;
}


`

export default GlobalStyles;