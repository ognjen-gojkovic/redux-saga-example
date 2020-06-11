import { all, call } from "redux-saga/effects";
import {
  onIncrementCounter,
  onIncrementByCounter,
  onIncrementAsyncCounter,
  onDecrementCounter,
  onDecrementByCounter,
  onDecrementAsyncCounter,
  onResetCounter,
} from "./counterSagas/counterSagas";
import { onFetchPosts } from "./postsSagas/postsSagas";

export function* rootSaga() {
  yield all([
    call(onIncrementCounter),
    call(onIncrementByCounter),
    call(onIncrementAsyncCounter),
    call(onDecrementCounter),
    call(onDecrementByCounter),
    call(onDecrementAsyncCounter),
    call(onResetCounter),
    call(onFetchPosts),
  ]);
}
