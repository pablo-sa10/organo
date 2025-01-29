import React from 'react'
import { IColaborador } from '../../shared/interfaces/iColaborador'
import Colaborador from '../colaborador/colaborador'
import './time.css'

interface TimeProps {
    corSecundaria: string
    corPrimaria: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {

    const section = {
        backgroundColor: props.corSecundaria,
    }

    const h3 = {
        borderColor: props.corPrimaria,
    }

    return (
        props.colaboradores.length > 0 ? <section style={section} className='time'>
            <h3 style={h3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        corDeFundo={props.corPrimaria} 
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />)}
                {/* <Colaborador /> */}
            </div>
        </section>
        : <React.Fragment></React.Fragment> // ou <></>
    )
}

export default Time