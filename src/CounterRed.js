import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incBy, increment, decrement } from "./redux/feature/counter.feature";

function CounterRed() {
  let counterState = useSelector((state) => {
    return state["counter"];
  });
  const dispatch = useDispatch();

  let { count } = counterState;
  const Inc = () => {
    dispatch(increment());
  };
  const Dec = () => {
    dispatch(decrement());
  };
  const IncBy5 = () => {
    dispatch(incBy(5));
    // action.payload : 5
  };
  return (
    <div className="container">
      <h2>{count}</h2>
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>
      <button onClick={IncBy5}>Increment By 5</button>
    </div>
  );
}

export default CounterRed;
