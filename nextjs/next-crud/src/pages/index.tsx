import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente'

export default function Home() {

    const clientes = [
        new Cliente('1', 'Ana', 34),
        new Cliente('2', 'Bia', 45),
        new Cliente('3', 'Carlos', 23),
        new Cliente('4', 'Pedro', 54)
    ]

    function clienteSelecionado(cliente: Cliente) {
        console.log('clienteSelecionado', cliente);
    }

    function clienteExcluido(cliente: Cliente) {
        console.log('clienteExcluido', cliente);
    }

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white
        `}>
            <Layout titulo="Cadastro simples">
                <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
            </Layout>
        </div>
    )

}  