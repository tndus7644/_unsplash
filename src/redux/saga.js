import {all} from 'redux-saga/effects'
import appSaga from './app/saga';
import authSaga from './auth/saga';
import topicSaga from './topic/saga';
import photoSaga from './photo/saga';
import collectionSaga from './collectionsPhoto/saga';
import searchSaga from './searchPhoto/saga';
import {fork} from "redux-saga/effects";

function* sagas() {
    yield all ([
        fork(appSaga),
        fork(authSaga),
        fork(topicSaga),
        fork(photoSaga),
        fork(searchSaga),
        fork(collectionSaga)
    ])
}

export default sagas;