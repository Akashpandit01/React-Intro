// import React, { createContext, useContext, useState } from 'react'


// const UserContext=createContext();


// export default function App() {
//   const [user,setUser]=useState("john");
//   return (
//     <UserContext.Provider value={user}>

//       <Parent/>
//     </UserContext.Provider>
//   )
// }

// function Parent(){
//   return<Child />
// }

// function Child(){
//   low freturn <GrandChild/>

// }

// function GrandChild(){
//   const user=useContext(UserContext)
//   return <h1>Hellow, {user}</h1>
// }
// import React from 'react'

// function Box({children}){
//  return (
//    <div style={{border:"2px solid red",padding:"18px",margin:"10px"}}>
//   {children}
//   </div>
//  )
// }


// function App() {
//   return (
//     <>
//    <Box>
//      <h1>Hellow from React</h1>
//     <p>This  is p1</p>
//     <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam rem obcaecati eaque consequatur! Culpa nemo velit, mollitia fuga porro fugit quasi asperiores eveniet ipsam eligen
//       di, excepturi repellat consequuntur quod.</li>
//    </Box>
//    <Box>This is inside a Box</Box>
//     </>
//   )
// }

// export default App

import React from 'react'
import DataComponent from './context/DataComponent'
import { DataProvider } from './context/DataProvider'

function App() {
  return (
  <DataProvider>
    <h1>Hellow from React</h1>
  
  <DataComponent/>
  </DataProvider>
  )
}

export default App
