import './formulario.css';
import CampoTexto from '../campoTexto';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form action="">
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Insira uma imagem"/>
            </form>
        </section>
    )
}

export default Formulario;