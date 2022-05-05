import React from 'react'
import { Body } from './Components/Body'
import { Header } from './Components/Header'

const App = () => {
  return (
    <>
      {/* Contaianer */}
      <div className="container">
        {/* nav bar  */}
        <Header/>
        {/* body */}
        <Body/>
      </div>
    </>
  )
}
export default App
