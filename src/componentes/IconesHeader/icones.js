import perfil from '../../imagens/perfil.svg'
import styled from 'styled-components'

const Icone = styled.li`
  display: flex;
  cursor: pointer;
  margin-top: 22px;
`

const icones = [perfil]

function IconesHeader () {
  return (
    <ul className='icones'>
    {icones.map((icone) => (
      <Icone><img src={icone} alt='icone usuario'></img></Icone>
    ))}
  </ul>
  )
}

export default IconesHeader