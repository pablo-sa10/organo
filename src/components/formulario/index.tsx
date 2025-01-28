import "./formulario.css";
import CampoTexto from "../campoTexto";
import ListaSuspensa from "../listaSuspensa/indes";
import Botao from "../botao";
import { useState } from "react";
import { IColaborador } from "../../shared/interfaces/iColaborador";

interface FormProps {
  colaboradorCadastrado: (colaborador: IColaborador) => void;
  times: string[];
}

const Formulario = (props: FormProps) => {
  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.colaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  return (
    <section className="formulario">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          change={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          change={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Insira uma imagem"
          valor={imagem}
          change={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={props.times}
          change={(valor) => setTime(valor)}
          obrigatorio={true}
          valor={time}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
