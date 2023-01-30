import styled from 'styled-components'

const textoOpcoes = ['Inicio', 'Cadastro', 'Novidades', 'Sobre Nós', 'Contato']

const CabecalhoHeader = styled.ul`
    display: flex;
    float: center;
    margin-left: 600px;
`

const Opcao = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-size: 18px;
  color: #005215;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  font-style: italic;
`

function Cabecalho() {
    return (
        <CabecalhoHeader>
        {textoOpcoes.map( (texto) => (
        <Opcao><p>{texto}</p></Opcao>
        ))}
        </CabecalhoHeader>
    )
}

export default Cabecalho