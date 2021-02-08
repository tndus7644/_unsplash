import {createActions, createReducer} from "reduxsauce";

const initialState = {
    photos: [],
    searchResult: {},
    singlePhoto:{},
    random:{}
}

export const Action = createActions({
    updateState: ['props'],
    listPhotos: ['data'],
    searchPhoto:['data'],
    getPhoto:['data'],
    randomPhoto:['data']
}, {
    prefix: 'PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
