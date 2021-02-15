import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    singlePhoto:{}
}

export const Action = createActions({
    updateState: ['props'],
    listPhotos: ['data'],
    getPhoto:['id', 'data'],
}, {
    prefix: 'PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
