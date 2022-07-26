import { CartActionTypes, CartReducerState, LocalActions } from './types';

const initialState: CartReducerState = {
  selections: {
    S: 0,
    M: 0,
    L: 0,
  },
};

export function cartsReducer(state = initialState, action: CartActionTypes): CartReducerState {
  switch (action.type) {
    case LocalActions.ADD: {
      return {
        ...state,
        selections: {
          ...state.selections,
          [action.payload]: state.selections[action.payload] + 1,
        },
      };
    }
    default:
      return state;
  }
}
