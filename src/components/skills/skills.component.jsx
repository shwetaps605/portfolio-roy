
import React from "react";
import { HeaderContainer } from "../styled/HeaderContainer.styled"
import "./skills.styles.scss"
import { Badge } from "../Badge.component";


const Skills = () => {

    const tools = ["HTML5",
    "CSS/Sass",
    "JavaScript",
    "React",
    "NodeJS",
    "Angular",
    "Java8","Docker"]

    return (
        <div className="container">
            {/* <HeaderContainer>
                <h1>My Arsenal</h1>
            </HeaderContainer> */}
            <h1 className="container__header">My Arsenal</h1>
            <div className="container__body">
                <Badge text="HTML5"/>
                <Badge text="CSS/Sass"/>
                <Badge text="Javascript"/>
                <Badge text="React"/>
                <Badge text="NodeJS"/>
                <Badge text="Angular"/>
                <Badge text="Java8"/>
                <Badge text="Docker"/>
            </div>
        </div>
    )
}

export default Skills;

