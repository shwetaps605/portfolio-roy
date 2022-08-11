import React from "react";
import { HeaderStyled } from './styled/Header.styled'

const Header = () => {
    return (
        <>
            <HeaderStyled>
                <h1 class="title">
                    Hubble
                </h1>
                <p class="subtitle">
                    Welcome to a random landing page where I am palying with CSS and trying to create something nice with styled components.
                </p>
            </HeaderStyled>
        </>

    )
}

export default Header