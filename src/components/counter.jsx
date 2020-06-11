import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  onIncrement,
  onIncrementBy,
  onIncrementAsync,
  onDecrement,
  onDecrementBy,
  onDecrementAsync,
  onReset,
} from "../redux/counterActions/counterActions";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <span className="display">Counter: {counter}</span>
      <div className="buttonWrapper">
        <button onClick={() => dispatch(onIncrement())}>Increment</button>
        <button onClick={() => dispatch(onIncrementBy(5))}>IncrementBy</button>
        <button onClick={() => dispatch(onIncrementAsync(2))}>
          IncrementAsync
        </button>
        <button onClick={() => dispatch(onDecrement())}>Decrement</button>
        <button onClick={() => dispatch(onDecrementBy(5))}>DecrementBy</button>
        <button onClick={() => dispatch(onDecrementAsync(3))}>
          DecrementAsync
        </button>
        <button onClick={() => dispatch(onReset())}>Reset Counter</button>
      </div>
    </div>
  );
};

export default Counter;
