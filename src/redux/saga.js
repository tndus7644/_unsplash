import {all} from 'redux-saga/effects'
import appSaga from './app/saga';
import authSaga from './auth/saga';
import topicSaga from './topic/saga';
import photoSaga from './photo/saga';
import {fork} from "redux-saga/effects";

function* sagas() {
    yield all ([
        fork(appSaga),
        fork(authSaga),
        fork(topicSaga),
        fork(photoSaga),
    ])
}

export default sagas;