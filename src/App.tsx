import React from 'react'
import Navbar from './components/navbar/Navbar'
import Login from './paginas/login/Login'
import Home from './paginas/home/Home'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/temas/listaTema/ListaTema'
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem'
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem'
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import Perfil from './components/perfil/Perfil'
import Footer from './components/footer/Footer'
import {Provider} from 'react-redux'
import store from './store/Store'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <BrowserRouter>
        <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
              <Route path='/temas' element={<ListaTema />} />
              <Route path='/postagens' element={<ListaPostagem />} />
              <Route path="/formularioPostagem" element={<CadastroPostagem />} />
              <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
        <Footer />
    </BrowserRouter>
    </Provider>
  )
}

export default App
