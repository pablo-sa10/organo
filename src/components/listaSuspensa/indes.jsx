import './listaSuspensa.css'

const ListaSuspensa = (props) => {

    // const aoTrocar = (event) =>{
    //     props.change(event.target.value)
    // }
   
    return (
        <div className="lista-suspensa">
            <label htmlFor="">{props.label}</label>
            <select onChange={event => props.change(event.target.value)} name="" id="" value={props.valor}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa