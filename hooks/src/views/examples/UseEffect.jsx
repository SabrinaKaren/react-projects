import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(nParam) {
    if (nParam !== '') {
        const n = parseInt(nParam);
        if (n < 0) return -1;
        else if (n === 0) return 1;
        else return calcFatorial(n - 1) * n;
    } else return -1;
}

function evenOrOdd(nParam) {
    if (nParam !== '') {
        const n = parseInt(nParam);
        return n % 2 === 0 ? 'Par' : 'Ímpar';
    } else return '-';
    
}

const UseEffect = (_) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState("-");

    useEffect(function() {
        setFatorial(calcFatorial(number));
        setStatus(evenOrOdd(number));
    }, [number]);

    useEffect(function() {
        if (fatorial > 1000000) {
            document.title = 'Eita!!!';
        }
    }, [fatorial]);

    return (
        <div className="UseEffect">
            
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
                
            {/* Exercício #01 */}
            <div>
                <SectionTitle title="Exercício #01"/>
                <div className="center">
                    <div>
                        <span className="text">Fatorial: </span>
                        <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                    </div>
                    <input
                        type="number"
                        className="input"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                </div>
            </div>

            {/* Exercício #02 */}
            <div>
                <SectionTitle title="Exercício #02"/>
                <div className="center">
                    <div>
                        <span className="text">Status: </span>
                        <span className="text red">{status}</span>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default UseEffect