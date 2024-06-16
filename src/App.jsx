import { useState } from 'react'
import CreateProduct from './Pages/CreateProduct'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About' 
import Products from './Pages/Products'


function App() {

  return (
   <BrowserRouter>

       <Routes>
          <Route path='form' element={< CreateProduct/>}/>
          <Route path='about' element={< About/>}/>
          <Route path='products' element={< Products/>}/>

       </Routes>
   
   
   </BrowserRouter>
  )
}

export default App
