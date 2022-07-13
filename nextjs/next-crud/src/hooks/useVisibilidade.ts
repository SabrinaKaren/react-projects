import { useState } from "react"

export default function useVisibilidade() {

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        tabelaVisivel: visivel == 'tabela',
        formularioVisivel: visivel == 'form',
        exibirTabela,
        exibirFormulario
    }

}