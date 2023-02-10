import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from './components'
import generateShareImage from './components/Ttml2canvas'

function App() {
  const hanldeCreateImg = () => {
    generateShareImage('recoil-wrap', 'preview')
  }

  return (
    <div className="App">
      <h1>Recoil demo</h1>
      
      <div id="recoil-wrap">
        <Test />
      </div>
      
      {/* 生成图片 */}
      <div
        style={{
          border: '1px dashed red',
          width: '800px',
          margin: '20px auto',
          borderRadius: '20px'
        }}
      >
        <button
          style={{marginTop: '20px'}}
          onClick={hanldeCreateImg}
        >生成图片</button>

        <div
          style={{
            width: '100%',
            height: '200px',
            padding: '20px',
            boxSizing: 'border-box'
          }}
        >
          <h3>预览</h3>
          <div
            id="preview"
            style={{
              border: '1px dashed green',
              padding: '5px'
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default App
