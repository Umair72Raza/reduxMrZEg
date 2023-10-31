import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './redux1/slice'

const Test2 = () => {
    const count = useSelector((state)=>state)  //select counter from state
    const dispatch =useDispatch()
//to call reducer, use useDispatch
    const incrementButton =() => {
      dispatch(increment());
    }

    const decrementButton =() =>{
      dispatch(decrement());
    }
  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementButton}>Click Me ++</button>
      <button onClick={decrementButton}>Click Me --</button>
    </div>
    
  )
}

export default Test2