import {all, takeLatest, put, call} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTO, function* ({data}) {
            const result = yield call(API.searchPhoto, data)
            console.log("[saga searchphoto] ", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    searchResult: result
                }))
            }
        })
    ])
}

export default saga;