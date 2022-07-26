import type { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../utilities/api';
import * as types from '../modules/products/types';

export function* getProductSaga() {
  try {
    const { data }: AxiosResponse<types.Product> = yield call(api, { method: 'get', url: '/live/product' });
    yield put<types.GetProductFulfilled>({
      type: types.SagaActions.GET_PRODUCT_FULFILLED,
      payload: data,
    });
  } catch (error) {
    yield put<types.GetProductRejected>({
      type: types.SagaActions.GET_PRODUCT_REJECTED,
    });
  }
}

export const productSagaWatchers = [takeLatest(types.SagaActions.GET_PRODUCT_PENDING, getProductSaga)];
