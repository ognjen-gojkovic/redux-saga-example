import { put, call, takeLatest } from "redux-saga/effects";
import { postsActionsTypes } from "../postsActions/postsActionsTypes";
import {
  requestPostsStart,
  requestPostsSuccess,
  requestPostsFailure,
} from "../postsActions/postsActions";

function* requestedPostsStart() {
  try {
    yield put(requestPostsStart());
    const data = yield call(() => {
      return fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((response) => response.json());
    });
    yield put(requestPostsSuccess(data));
  } catch (err) {
    yield put(requestPostsFailure(err));
  }
}

export function* onFetchPosts() {
  yield takeLatest(postsActionsTypes.FETCH_POSTS, requestedPostsStart);
}
