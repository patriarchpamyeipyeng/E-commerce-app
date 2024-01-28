import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Body from './Components/Body'
import Images from './Components/Images'
import ProductDisplay from './Components/ProductDisplay'

function App(){

  return (
    <>
 <Nav/>
 <hr className="border-gray-300 border-" />
 <Images/>
 <ProductDisplay/>
     <Body/>
    </>
  )
}

export default App
