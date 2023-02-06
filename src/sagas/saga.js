import { takeLatest, put, spawn, call, delay } from "redux-saga/effects";
import { newsRequest, newsSuccess } from "../slice/index";
import { request } from "../api/index";

// worker
function* newsRequestSaga(action) {
  let data;
  try {
    data = yield call(request, action.payload);
    yield put(newsSuccess(data));
  } catch (e) {
    delay(3 * 1000);
    yield put(newsRequest(action.payload));
  }
}

// watcher
function* watchnewsRequestSaga() {
  yield takeLatest("news/newsRequest", newsRequestSaga);
}

export default function* saga() {
  yield spawn(watchnewsRequestSaga);
}
