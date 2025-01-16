import './colaborador.css';
import { IColaborador } from '../../shared/interfaces/iColaborador';

interface ColaboradorProps extends IColaborador {
    corDeFundo: string
}

const Colaborador = ({nome, cargo, imagem, corDeFundo}: ColaboradorProps) => {

    const corFundo = {
        backgroundColor: corDeFundo 
    }

    return (
        <div className='colaborador' style={corFundo}>
            <div className='cabecalho'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador