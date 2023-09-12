import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import App from './App.tsx'


import Perfil from './assets/Pages/Perfil'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          {/* <Perfil/> */}
    <BrowserRouter>
          <Routes>
            <Route>

              <Route path='perfil/:id' element={<Perfil/>}/>
              
            </Route>
        </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)