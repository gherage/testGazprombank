import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import serviceReducer from './ServiceState';
import rootSaga from './serviceSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
