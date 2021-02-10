import {all, takeLatest, put, call} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.COLLECTION_PHOTO, function* ({data}) {
            const result = yield call(API.collectionPhoto, data)
            console.log("[saga collectionPhoto]", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    collection: result
                }))
            }
        })
    ])
}

export default saga;