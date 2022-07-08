import React, { useEffect } from 'react'
import { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (_) => {

    const {state, setState} = useContext(DataContext);
    const {text, number, setText, setNumber} = useContext(AppContext);

    useEffect(function() {
        if (number > 1240) {
            setText('Eita!!!');
        }
    }, [number]);

    function addNumber(delta) {
        setState({
            ...state,
            number: state.number + delta
        });
    }

    return (
        <div className="UseContext">

            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            {/* Exercício #01 */}
            <div>
                <SectionTitle title="Exercício #01" />
                <div className="center">
                    <span className="text">{state.text}</span>
                    <span className="text">{state.number}</span>
                    <div>
                        <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                        <button className="btn" onClick={() => addNumber(1)}>+1</button>
                    </div>
                </div>
            </div>

            {/* Exercício #02 */}
            <div>
                <SectionTitle title="Exercício #02" />
                <div className="center">
                    <span className="text">{text}</span>
                    <span className="text">{number}</span>
                    <div>
                        <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                        <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default UseContext