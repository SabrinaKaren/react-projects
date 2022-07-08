import React from 'react'
import { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (_) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">

            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                <span className="text">{state.user?.name || 'Sem usuário' }</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberMultiply7'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberDivide25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: -100})}>-100</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: 50})}>+50</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberInt'})}>int</button>
                    <button className="btn" onClick={() => login(dispatch, 'Karen')}>Login</button>
                </div>
            </div>

        </div>
    )

}

export default UseReducer