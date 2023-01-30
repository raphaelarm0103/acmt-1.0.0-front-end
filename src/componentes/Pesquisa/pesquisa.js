import Input from '../Input/input.js'
import styled from 'styled-components'

const PesquisaContainer = styled.section`
    color: #005215;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
    margin-left: -400px;
    margin-top: -220px;
`

const Titulo = styled.h2`
    color: #005215;
    font-size: 25px;
    text-align: center;
    width: 100%;
`

function Pesquisa () {
    return (
        <PesquisaContainer>
            <Titulo>Pesquise aqui pelo site</Titulo>
            <Input placeholder="Digite sua pesquisa"/>
        </PesquisaContainer>
    )
}

export default Pesquisa