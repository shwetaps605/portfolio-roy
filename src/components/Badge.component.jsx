import React from 'react'
import { BadgeStyled } from './styled/Badge.styled'

export const Badge = ({ text, icon }) => {
    return (
        <BadgeStyled>
            <p>{text}</p>
        </BadgeStyled>
    )
}
