import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    singlePhoto:{},
    photoRelated:{
        results:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    listPhotos: ['data'],
    getPhoto:['id', 'data'],
    getPhotoRelated:['id', 'data'],
}, {
    prefix: 'PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});