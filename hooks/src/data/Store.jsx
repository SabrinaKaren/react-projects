import React, {useState} from "react";

const initialData = {
    number: 1234,
    text: 'Context API + Hooks'
};
export const AppContext = React.createContext(initialData);

const Store = props => {

    const [state, setState] = useState(initialData);

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t)
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export default Store;