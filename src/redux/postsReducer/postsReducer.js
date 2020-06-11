import { postsActionsTypes } from "../postsActions/postsActionsTypes";

const INIT_STATE = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case postsActionsTypes.REQUEST_POSTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case postsActionsTypes.REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        error: null,
      };
    case postsActionsTypes.REQUEST_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
