import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, { data } from '../data/DataContext'
import { useState } from 'react'
import Store from '../data/Store'

const App = _ => {

    const [state, setState] = useState(data)

    return (
        <Store>
            <DataContext.Provider value={{ state: state, setState: setState }}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App