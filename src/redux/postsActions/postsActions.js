import { postsActionsTypes } from "./postsActionsTypes";

export const requestPostsStart = () => ({
  type: postsActionsTypes.REQUEST_POSTS_START,
});

export const requestPostsSuccess = (posts) => ({
  type: postsActionsTypes.REQUEST_POSTS_SUCCESS,
  payload: posts,
});

export const requestPostsFailure = (err) => ({
  type: postsActionsTypes.REQUEST_POSTS_FAILURE,
  payload: err,
});

export const fetchPosts = () => ({
  type: postsActionsTypes.FETCH_POSTS,
});
