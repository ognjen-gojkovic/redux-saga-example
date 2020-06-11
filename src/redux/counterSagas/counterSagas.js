import { put, delay, takeLatest } from "redux-saga/effects";
import {
  increment,
  incrementBy,
  incrementAsync,
  decrement,
  decrementBy,
  decrementAsync,
  reset,
} from "../counterActions/counterActions";
import { counterActionTypes } from "../counterActions/counterActionTypes";

function* incrementCounter() {
  yield put(increment());
}

export function* onIncrementCounter() {
  yield takeLatest(counterActionTypes.ON_INCREMENT, incrementCounter);
}

function* incrementByCounter(action) {
  yield put(incrementBy(action.payload));
}

export function* onIncrementByCounter() {
  yield takeLatest(counterActionTypes.ON_INCREMENT_BY, incrementByCounter);
}

function* incrementAsyncCounter(action) {
  yield delay(1500);
  yield put(incrementAsync(action.payload));
}

export function* onIncrementAsyncCounter() {
  yield takeLatest(
    counterActionTypes.ON_INCREMENT_ASYNC,
    incrementAsyncCounter
  );
}

function* decrementCounter() {
  yield put(decrement());
}

export function* onDecrementCounter() {
  yield takeLatest(counterActionTypes.ON_DECREMENT, decrementCounter);
}

function* decrementByCounter(action) {
  yield put(decrementBy(action.payload));
}

export function* onDecrementByCounter() {
  yield takeLatest(counterActionTypes.ON_DECREMENT_BY, decrementByCounter);
}

function* decrementAsyncCounter(action) {
  yield delay(1000);
  yield put(decrementAsync(action.payload));
}

export function* onDecrementAsyncCounter() {
  yield takeLatest(
    counterActionTypes.ON_DECREMENT_ASYNC,
    decrementAsyncCounter
  );
}

function* resetCounter() {
  yield put(reset());
}

export function* onResetCounter() {
  yield takeLatest(counterActionTypes.ON_RESET, resetCounter);
}
