
import './campo.css';

const CampoTexto = (props) => {

    let placeholder = `${props.placeholder}...`

    const aoDigitado = (event) => {
        props.change(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto