import { combineReducers, createStore } from 'redux';
import saga from 'redux-saga';

import { rootReducer } from './modules/rootReducer';
import { rootSaga } from './saga';

const reducers = combineReducers({ ...rootReducer });
const sagaMiddleware = saga();
export const store = createStore(reducers);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
