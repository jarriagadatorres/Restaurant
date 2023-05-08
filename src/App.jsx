import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import About from './vistas/About.jsx';
import Carta from './vistas/Carta.jsx';
import Reserva from './vistas/Reserva.jsx';
import Home from './vistas/Home.jsx'
import NavBarProyect from './componentes/navbar.jsx';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarProyect />}>
            <Route index element={<Home />} />
            <Route path="/Carta" element={<Carta />} />
            <Route path="/Reserva" element={<Reserva />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
