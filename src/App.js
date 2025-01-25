import { useState } from 'react';
import Banner from './components/banner'
import Formulario from './components/formulario';
import Time from './components/time';
import Rodape from './components/rodape/rodape';

function App() {

  const times = [
    {
      nome: '',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0FBE2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaborador] = useState([])

  return (
    <div className="App">
      <Banner enderecoImagem='/images/imagens/banner.png' textoAlternaltivo='O banner principal da página do Organo' />
      <Formulario times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => setColaborador([...colaboradores, colaborador])} />
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
