import './formulario.css';
import CampoTexto from '../campoTexto';
import ListaSuspensa from '../listaSuspensa/indes';
import Botao from '../botao';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const save = (e) => {
        e.preventDefault()
        
    }

    return (
        <section className='formulario'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Insira uma imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
                <Botao >
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;