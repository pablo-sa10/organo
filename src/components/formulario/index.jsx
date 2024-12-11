import './formulario.css';
import CampoTexto from '../campoTexto';
import ListaSuspensa from '../listaSuspensa/indes';
import Botao from '../botao';
import { useState } from 'react';

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
        console.log("form => ", nome, cargo, imagem, time)
        
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('');

    return (
        <section className='formulario'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    change={valor => setNome(valor)}/>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    change={valor => setCargo(valor)}/>
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Insira uma imagem"
                    valor={imagem}
                    change={valor => setImagem(valor)}/>
                <ListaSuspensa valor={time}
                               change={valor => setTime(valor)}
                               label="Time" itens={times}/>
                <Botao >
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;