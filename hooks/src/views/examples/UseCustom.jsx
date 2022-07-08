import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch';

const url = 'http://files.cod3r.com.br/curso-react/estados.json';

const UseRef = (_) => {

    const [count, inc, dec] = useCounter();
    const response = useFetch(url);

    function showStates(states) {
        return states.map(s => <li key={s.nome}>{s.nome} - {s.sigla}</li>);
    }

    return (
        <div className="UseCustom">

            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            {/* Exercício #01 */}
            <div>
                <SectionTitle title="Exercício #01" />
                <div className="center">
                    <span className="text">{count}</span>
                    <div>
                        <button className="btn" onClick={() => dec()}>-1</button>
                        <button className="btn" onClick={() => inc()}>+1</button>
                    </div>
                </div>
            </div>

            {/* Exercício #02 */}
            <div>
                <SectionTitle title="Exercício #02" />
                <div className="center">
                    <ul>
                        { response.data ? showStates(response.data) : false }
                    </ul>
                </div>
            </div>

        </div>
    )
    
}

export default UseRef