import React,{useReducer} from 'react'
import {Button}  from 'react-bootstrap';
import Memo from './Memo';
import Ref from './Ref';

const initial ={count:0,name:'ela'};
function reduce(state,action){
    switch(action.type){
        case'decrement':return{count:state.count-1,name:'ela'};
        case'increment':return{count:state.count+1,name:'ela'};
        case'change-name':return{count:state.count,name:'siddhu'};
        default:{}
    }

}

function HooksDemo() {
 const [state,dispatch]=useReducer(reduce,initial)
  return <>
  <div>
  
  <div>
  <Button variant= 'primary' onClick={()=>dispatch({type:'increment'})}>+</Button>
  &nbsp;
  <span>{state.count}</span>
  &nbsp;
  <Button variant='primary'onClick={()=>dispatch({type:'decrement'})}>-</Button>
  </div>
  <div>
  <Button variant='primary'onClick={()=>dispatch({type:'change-name'})}>Change Name</Button>
  <div>{state.name}</div>
  
  </div>
  <Memo/>
  <Ref/>
  </div>
  
  </>
 
}

export default HooksDemo