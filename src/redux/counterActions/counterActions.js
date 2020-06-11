import { counterActionTypes } from "./counterActionTypes";

export const increment = () => ({
  type: counterActionTypes.INCREMENT,
});

export const onIncrement = () => ({
  type: counterActionTypes.ON_INCREMENT,
});

export const incrementBy = (num) => ({
  type: counterActionTypes.INCREMENT_BY,
  payload: num,
});

export const onIncrementBy = (num) => ({
  type: counterActionTypes.ON_INCREMENT_BY,
  payload: num,
});

export const incrementAsync = (num) => ({
  type: counterActionTypes.INCREMENT_ASYNC,
  payload: num,
});

export const onIncrementAsync = (num) => ({
  type: counterActionTypes.ON_INCREMENT_ASYNC,
  payload: num,
});

export const decrement = () => ({
  type: counterActionTypes.DECREMENT,
});

export const onDecrement = () => ({
  type: counterActionTypes.ON_DECREMENT,
});

export const decrementBy = (num) => ({
  type: counterActionTypes.DECREMENT_BY,
  payload: num,
});

export const onDecrementBy = (num) => ({
  type: counterActionTypes.ON_DECREMENT_BY,
  payload: num,
});

export const decrementAsync = (num) => ({
  type: counterActionTypes.DECREMENT_ASYNC,
  payload: num,
});

export const onDecrementAsync = (num) => ({
  type: counterActionTypes.ON_DECREMENT_ASYNC,
  payload: num,
});

export const reset = () => ({
  type: counterActionTypes.RESET,
});

export const onReset = () => ({
  type: counterActionTypes.ON_RESET,
});
