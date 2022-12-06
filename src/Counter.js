import React, { useState } from 'react'

function Counter() {
  const [state,setState]=useState({
    count:1
  })
  const Inc=()=>{
    setState({
      count: state.count +1
    })
  }
  const Dec=()=>{
    setState({
      count: state.count -1
    })
  }
  const IncBy5=()=>{
    setState({
      count: state.count + 5
    })
  }
  return (
    <div className='container'>
      <h2>{state.count}</h2>
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>
      <button onClick={IncBy5}>
        Increment By 5
      </button>
    </div>
  );
}

export default Counter;