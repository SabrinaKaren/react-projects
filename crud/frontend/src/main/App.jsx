import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Home from '../components/home/Home'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import Nav from '../components/template/Nav'

const App = _ => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Home />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App