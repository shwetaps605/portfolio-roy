import styled from 'styled-components'
import * as palette from './Variable'

export const HeaderStyled = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&family=Raleway:wght@200;300;500&family=Roboto+Mono:wght@200&display=swap');

background-image: transparent;
min-height:100vh;
max-width:90%;
padding:20px;
margin:auto;
display:flex;
text-align:center;
justify-content:space-evenly;
flex-direction:column;

.title {
    font-size:40px;
    color:${ ({theme}) => theme.colors.fontColor2 };
    font-family: 'Roboto Mono', monospace;
    margin: 2em 0;
}

.subtitle {
    font-size:25px;
    color:#fff;
    font-family: 'Raleway', sans-serif;
    margin-bottom:2em;
}

.bio {
    font-size:15px;
    color:#eee;
    line-height:1.8;
    font-family: 'Quicksand', sans-serif;
    margin-bottom:2em;
}

.highlight {
    color:#FFFB94;
    content:""
}

img {
    max-width:100%;
    max-height:90%;
    margin-bottom:2em;
    border-radius:15px;
}
`