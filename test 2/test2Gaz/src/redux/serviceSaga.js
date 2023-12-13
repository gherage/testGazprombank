import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  getServicesSuccess,
  getServicesFailure,
  getOneServiceSuccess,
  getOneServiceFailure,
} from './ServiceState';

function* workGetServicesFetch() {
  try {
    const services = yield call(fetch, '/api/services');
    const formattedServices = yield services.json();
    yield put(getServicesSuccess(formattedServices));
  } catch (error) {
    yield put(getServicesFailure(error.message));
  }
}

function* workGetOneServiceFetch(action) {
  try {
    const { serviceId } = action.payload;
    const service = yield call(() => fetch(`/api/services/${serviceId}`));
    const formattedService = yield service.json();
    yield put(getOneServiceSuccess(formattedService));
  } catch (error) {
    yield put(getOneServiceFailure(error.message));
  }
}

function* servicesSaga() {
  yield takeEvery('services/getServicesFetch', workGetServicesFetch);
}

function* oneServiceSaga() {
  yield takeEvery('services/getOneServiceFetch', workGetOneServiceFetch);
}

function* rootSaga() {
  yield all([servicesSaga(), oneServiceSaga()]);
}

export default rootSaga;
