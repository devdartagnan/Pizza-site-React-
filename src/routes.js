import Header from 'components/PaginaPadrao'
import Menu from 'components/Menu'
import Cardapio from 'pages/Cardapio'
import Home from 'pages/Home'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Paginapadrao from 'components/PaginaPadrao'
import Sobre from 'pages/Sobre'
import Footer from 'components/Footer'
import NotFound from 'pages/NotFound'

export default function AppRoutes() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<Paginapadrao />} >
                        <Route index element={<Home />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    )
}
