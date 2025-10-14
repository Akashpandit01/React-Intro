// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ClickButton from './component/ClickButton'
// import Store from './redux/store'
// import { increment } from './redux/action'

// function App() {
//   console.log("intitial state",Store.getState());
//   // const [count, setCount] = useState(0)

//   // Store.dispatch(increment());

//   return (
//     <>
//       <ClickButton/>
      
//     </>
//   )
// }

// export default App


import React from 'react'
import ClickButton from './component/ClickButton'
import Store from './redux/store'
import { increment } from './redux/action';

function App() {
  console.log("initial State",Store.getState());
  Store.dispatch(increment());
  console.log("updated State",Store.getState());
  return (
    <div>
      
      <ClickButton/>
    </div>
  )
}

export default App

