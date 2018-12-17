import React from 'react'
// import './App.css';

const Counter = ({ count, increment, decrement, reset, undo, redo }) =>
<div style={{background:"lightblue", padding:"10px", borderradius:"10px" }}>
  <span>
    <b>Counter:</b> {count}
    {' '}
    <button onClick={increment} style={{background:"white", margin:"10", padding:"8"}}>+</button>
    {' '}
    <button onClick={decrement} style={{background:"white", margin:"10", padding:"8"}}>-</button>
    {' '}
    <button onClick={reset}>reset</button>
    {' '}
    <button onClick={undo}>undo</button>
    {' '}
    <button onClick={redo}>redo</button>
  </span>
</div>
export default Counter
