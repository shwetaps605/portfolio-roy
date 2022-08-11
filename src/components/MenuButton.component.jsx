import { MenuButtonStyled } from './styled/MenuButton.styled'

export const MenuButton = (props) => {

    const { handleCollapse, isMenuOpen } =  props;

    return(
        <MenuButtonStyled onClick={() => handleCollapse()}>
            <span></span>
            <span></span>
            <span></span>
        </MenuButtonStyled>

    )

}