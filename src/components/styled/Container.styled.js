import styled from 'styled-components'

export const Container = styled.div`
background-color:${ ({theme}) => theme.colors.contentContainer1Bg };
margin:auto;
padding:20px 10px;
max-width:100%;
min-height:200px;

h1 {
    font-size:20px;
    color: #000;
}


`

