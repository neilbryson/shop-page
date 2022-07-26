import { ProductActionTypes, ProductReducerState, SagaActions } from './types';

const initialState: ProductReducerState = {
  product: undefined,
};

export function productsReducer(state = initialState, action: ProductActionTypes): ProductReducerState {
  switch (action.type) {
    case SagaActions.GET_PRODUCT_FULFILLED:
      return { ...state, product: action.payload };
    default:
      return state;
  }
}
