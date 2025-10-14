 
 import React, { useState } from "react";

//  function addTOdo(text){
//     MediaStreamAudioDestinationNode([...prerenderToNodeStream,{id:
//         Date.now(),text,completed:false}])
//  }


//  function toggleTo(id){
//     setTodos([...todos,{id:Date.now(),text,completed:false}])
//  }
  



 function Todoapp() {


  const [todos,setTodos]=useState([]);


  function addTodo(text){
  setTodos([...todos,{id:Date.now(),text,completed:false}]);

}
   return (
     <div>
      <button onClick={()=>addTodo("New Task")}>Add TOdo</button>
          <ul>
            {
              todos.map((todo)=>(
                <li key={todo.id}>
                  <span>{todo.text}</span>
                </li>
              ))
            }
          </ul>
       
     </div>
   )
 }
 
 export default Todoapp
 