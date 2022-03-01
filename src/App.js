import logo from './logo.svg';
import './App.css';

import Container from './componentes/layout/Container'
import Visor from './componentes/layout/Visor'
import Buttons from './componentes/layout/Buttons'



function App() {
  return (
    <Container>
      <Visor/>
      <Buttons/>
    </Container>
  );
}

export default App;
