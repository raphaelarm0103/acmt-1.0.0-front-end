import Header from './componentes/Header/header';
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa/pesquisa.js'


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #e1e8ee 35%, #005215 100%);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;