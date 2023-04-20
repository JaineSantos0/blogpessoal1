import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './paginas/home/Home'
import Footer from './components/footer/Footer'
import Login from './paginas/login/Login'
import ListaTema from './components/temas/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path='/usuarios/cadastrar' element={<CadastroUsuario />} />
              <Route path='/temas' element={<ListaTema />} />
              <Route path='/posts' element={<ListaPostagem />} />
            </Routes>
          </div>
        <Footer />
    </BrowserRouter>
  )
}

export default App
