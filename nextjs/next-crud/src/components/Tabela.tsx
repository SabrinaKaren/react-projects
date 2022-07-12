import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

const trItemClasses = "text-left p-4"

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function renderizarCabecalho() {
        return (
            <tr>
                <th className={trItemClasses}>Código</th>
                <th className={trItemClasses}>Nome</th>
                <th className={trItemClasses}>Idade</th>
                { exibirAcoes ? <th className="p-4">Ações</th> : false }
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className={trItemClasses}>{cliente.id}</td>
                    <td className={trItemClasses}>{cliente.nome}</td>
                    <td className={trItemClasses}>{cliente.idade}</td>
                    { exibirAcoes ? renderizarAcoes(cliente) : false }
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                { props.clienteSelecionado ? (
                    <button className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `} onClick={() => props.clienteSelecionado(cliente)}>
                        {IconeEdicao}
                    </button>
                ) : false }

                { props.clienteExcluido ? (
                    <button className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `} onClick={() => props.clienteExcluido(cliente)}>
                        {IconeLixo}
                    </button>
                ) : false }
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )

}