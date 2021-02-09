import {all, takeLatest, put, call} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.LIST_PHOTOS, function* ({data}) {
            const result = yield call(API.listPhotos, data)
            console.log("[saga listPhotos]", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    list: result
                }))
            }
        }),
        takeLatest(Action.Types.SEARCH_PHOTO, function* ({data}) {
            const result = yield call(API.searchPhoto, data)
            console.log("[saga searchphoto] ", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    searchResult: result
                }))
            }
        }),
        takeLatest(Action.Types.GET_PHOTO, function* ({id, data}) {
            const result = yield call(API.getPhoto, id, data)
            console.log("[saga getPhoto]", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    singlePhoto: result
                }))
            }
        }),

        takeLatest(Action.Types.GET_PHOTO_RELATED, function* ({id, data}) {
            const result = yield call(API.getPhotoRelated, id, data);
            console.log("[saga getPhotoRelated]", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    photoRelated: result
                }))
            }
        }),

        takeLatest(Action.Types.RANDOM_PHOTO, function* ({data}) {
            const result = yield call(API.randomPhoto, data)
            console.log("[saga randomPhoto]", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    random: result
                }))
            }
        })
    ])
}

export default saga;