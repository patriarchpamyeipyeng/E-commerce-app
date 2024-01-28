import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Body from './Components/Body'
import Products from './Components/Products'


function App(){

  return (
    <>
 <Nav/>
 <hr className="border-gray-300 border-" />

 <Products/>
     <Body/>
    </>
  )
}

export default App
