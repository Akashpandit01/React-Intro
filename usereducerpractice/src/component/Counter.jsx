import React, { useReducer } from 'react'

function reducer(state,action){

   switch(action.type){
     case 'increment':
        return {count:state.count+1};
        

        case 'decrement':
            return{count:state.count-1};

            default :
            return state;
   }
}

function Counter() {


    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <>
    <h1>Counter using reducer</h1>
    <p>count :{state.count}</p>
    <button onClick={()=>dispatch({type:'increment'})}>Increase counts </button>

    <button onClick={()=>dispatch({type:'decrement'})}>decrement counts</button>
    
    
    
    </>
  )
}

export default Counter
