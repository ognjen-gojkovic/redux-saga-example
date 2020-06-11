import { counterActionTypes } from "../counterActions/counterActionTypes";

const INIT_STATE = {
  counter: 0,
  isLoading: false,
};

export const counterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case counterActionTypes.INCREMENT_BY:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case counterActionTypes.INCREMENT_ASYNC:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case counterActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case counterActionTypes.DECREMENT_BY:
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    case counterActionTypes.DECREMENT_ASYNC:
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    case counterActionTypes.RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};
