import { takeLatest, call, put } from 'redux-saga/effects'
import getDataRest from '../axios/API'

export function* watcherSaga() {
    yield takeLatest("GET_DATA", workerSaga);
}

function* workerSaga() {
    try {
        const response = yield call(getDataRest);
        const data = response.data;
        console.log(JSON.stringify(data))
        yield put({ type: "GET_SUCESS_DATA" ,data:data});
    } catch (error) {
        console.log(error)
        yield put({ type: "GET_FAILURE_DATA" })
    }
}