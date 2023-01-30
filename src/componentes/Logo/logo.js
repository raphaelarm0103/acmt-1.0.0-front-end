import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`

const TituloLogo = styled.p`
    color: #005215;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} 
                 alt='logo'/>
            <TituloLogo><strong>ACMT</strong></TituloLogo>
        </LogoContainer>
    )
}

export default Logo