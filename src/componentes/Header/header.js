import Logo from '../Logo/logo.js'
import Cabecalho from '../Cabecalho/cabecalho.js';
import IconesHeader from '../IconesHeader/icones.js';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: aliceblue;
    height: 12vh;
    display: flex;
`

function Header (){
    return (
        <HeaderContainer>
            <Logo/>
            <Cabecalho/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header