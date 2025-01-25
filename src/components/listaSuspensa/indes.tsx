import "./listaSuspensa.css";

interface ListaSuspensaProps{
  change: (valor: string) => void
  label: string
  obrigatorio: boolean
  valor: string
  itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
  // const aoTrocar = (event) =>{
  //     props.change(event.target.value)
  // }

  return (
    <div className="lista-suspensa">
      <label htmlFor="">{props.label}</label>
      <select
        onChange={(event) => props.change(event.target.value)}
        required={props.obrigatorio}
        name=""
        id=""
        value={props.valor}
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
