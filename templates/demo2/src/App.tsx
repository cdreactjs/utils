import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { numberAdd } from '@cdreact/utils'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {numberAdd(0.1, 0.2)}
      </div>
    </>
  )
}

export default App
