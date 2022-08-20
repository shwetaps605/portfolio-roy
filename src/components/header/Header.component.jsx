import React from "react";
import { HeaderStyled } from '../styled/Header.styled'
import headerImage from "../../assets/profile.jpeg"

const Header = () => {
    return (
        <>
            <HeaderStyled>
                <h1 className="title">
                    Hello
                </h1>
                <p className="subtitle">
                    I am <span className="highlight">Shweta</span>
                </p>
                <img src={headerImage}/>

                <p className="bio">I am a frontend developer and love working with visual design. I have some expeiences with backend development as well.</p>
            </HeaderStyled>
        </>

    )
}

export default Header