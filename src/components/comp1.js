import { useReducer,reducer,initialState } from 'react';

function Comp1() {
  const Comp1=() =>{
   const reducer=(state,action)=>{
     if(action.type==='INCREASE'){
       return state+1;
     }
     else{
       return state-1;
     }
   }
   const [state, dispatch] = useReducer(reducer, 0);

 return (
   <>
     <button  onClick={()=>dispatch({type: 'INCREASE'})}>+</button><br></br>
     <h2>Count:{state}</h2>
     <button  onClick={()=>dispatch({type: 'DECREASE'})}>-</button><br></br>

   </>
 );
}
}

export default Comp1;


