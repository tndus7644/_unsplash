import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from './redux'
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_TOPICS, function* ({data}) {
            const result = yield call(API.getTopics, data);
            console.log("[saga getTopics]", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    list: result
                }))
            }
        })

    ])
}

export default saga;