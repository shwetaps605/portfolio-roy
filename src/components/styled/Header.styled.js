import styled from 'styled-components'
import * as palette from './Variable'

export const HeaderStyled = styled.header`
background-image: ${ ({theme}) => theme.gradients.gradientImage1};
min-height:50vh;
margin:auto;
display:flex;
text-align:center;
justify-content:space-evenly;
flex-direction:column;

h1 {
    font-size:40px;
    color:yellow;
}

p {
    color:#fff;
}
`