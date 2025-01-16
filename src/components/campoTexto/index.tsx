
import './campo.css';

interface CampoTextoProps {
    change: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
}

const CampoTexto = (props: CampoTextoProps) => {

    let placeholder = `${props.placeholder}...`

    const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.change(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                type="text" 
                placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto