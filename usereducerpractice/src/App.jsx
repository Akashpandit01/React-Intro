import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/counter'
import Todoapp from './component/Todoapp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter/> */}

    <Todoapp/>
    </>
  )
}

export default App
