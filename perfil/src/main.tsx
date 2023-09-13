import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
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