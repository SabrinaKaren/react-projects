import Cliente from "../core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            { id
                ? <Entrada
                    rotulo="Código"
                    valor={id}
                    somenteLeitura
                    className="mb-5"
                /> : false }
            <Entrada
                rotulo="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada
                rotulo="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />

            <div className="flex justify-end mt-7">
                <Botao
                    cor="blue"
                    className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(id, nome, +idade))}
                >
                    { id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )

}