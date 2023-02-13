import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from './components'

function App() {

  return (
    <div className="App">
      <h1>Recoil demo</h1>
      
      <div id="recoil-wrap">
        <Test />
      </div>
    </div>
  )
}

export default App
