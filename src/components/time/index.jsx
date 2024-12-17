import Colaborador from '../colaborador/colaborador'
import './time.css'

const Time = (props) => {

    const section = {
        backgroundColor: props.corSecundaria,
    }

    const h3 = {
        borderColor: props.corPrimaria,
    }

    return (
        props.colaboradores.length > 0 &&<section style={section} className='time'>
            <h3 style={h3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />)}
                {/* <Colaborador /> */}
            </div>
        </section>
    )
}

export default Time