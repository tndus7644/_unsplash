import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from './redux'
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_USERS, function* ({data}){
            const result = yield call(API.searchUsers, data)
            if(result){
                yield put(Action.Creators.updateState({
                    UsersResults: result
                }))
            }
        })
    ])
}

export default saga;