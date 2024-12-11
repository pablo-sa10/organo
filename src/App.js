import { useState } from 'react';
import Banner from './components/banner';
import Formulario from './components/formulario';

function App() {

  const [colaboradores, setColaborador] = useState([])

  return (
    <div className="App">
      <Banner/>
      <Formulario colaboradorCadastrado={colaborador => setColaborador([...colaboradores, colaborador])}/>
    </div>
  );
}

export default App;
