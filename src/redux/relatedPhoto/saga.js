import {all, takeLatest, put, call} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTO_RELATED, function* ({id, data}) {
            const result = yield call(API.getPhotoRelated, id, data);
            console.log("[saga getPhotoRelated]", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    photoRelated: result
                }))
            }
        })
    ])
}

export default saga;