import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente'
import { useState } from "react";

export default function Home() {

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const clientes = [
        new Cliente('1', 'Ana', 34),
        new Cliente('2', 'Bia', 45),
        new Cliente('3', 'Carlos', 23),
        new Cliente('4', 'Pedro', 54)
    ]

    function novoCliente() {
        setCliente(Cliente.vazio())
        setVisivel('form')
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        setVisivel('form')
    }

    function clienteExcluido(cliente: Cliente) {
        console.log('clienteExcluido', cliente);
    }

    function salvarCliente(cliente: Cliente) {
        console.log('salvarCliente', cliente);
        setVisivel('tabela')
    }

    return (
        <div className={`
            flex flex-col justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white
        `}>
            <Layout titulo="Cadastro simples">
                { visivel === 'tabela' ? (
                    <>
                        <div className="flex justify-end">
                            <Botao
                                cor="green"
                                className="mb-4"
                                onClick={novoCliente}
                            >Novo cliente</Botao>
                        </div>
                        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
                    </>
                ) : (
                    <Formulario
                        cliente={cliente}
                        cancelado={() => setVisivel('tabela')}
                        clienteMudou={salvarCliente}
                    />
                ) }
            </Layout>
        </div>
    )

}  