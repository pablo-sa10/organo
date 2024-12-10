
import './campo.css';

const CampoTexto = (props) => {

    let placeholder = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input required={props.obrigatorio} type="text" placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto