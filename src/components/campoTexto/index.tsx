
import './campo.css';

interface CampoTextoProps {
    change: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
}

const CampoTexto = ({ change, label, obrigatorio, placeholder, valor}: CampoTextoProps) => {

    let placeholderModificada = `${placeholder}...`

    const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
        change(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">{label}</label>
            <input
                value={valor}
                onChange={aoDigitado} 
                required={obrigatorio} 
                type="text" 
                placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto