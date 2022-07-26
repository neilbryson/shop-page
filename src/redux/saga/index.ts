import { all } from 'redux-saga/effects';

import { productSagaWatchers } from './products';

export function* rootSaga() {
  yield all([...productSagaWatchers]);
}
