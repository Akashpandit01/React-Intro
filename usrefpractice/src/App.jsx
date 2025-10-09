import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusInput from './FocusInput'
import RenderCounter from './RenderCounter'
import QueryBasedPagination from './QueryBasedPagination'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <FocusInput/> */}

    {/* <RenderCounter/> */}
    <QueryBasedPagination/>
    </>
  )
}

export default App
