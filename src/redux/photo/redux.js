import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    searchResult: {
        results:[]
    },
    singlePhoto:{},
    random:{},
    photoRelated:{
        results:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    listPhotos: ['data'],
    searchPhoto:['data'],
    getPhoto:['id', 'data'],
    getPhotoRelated:['id', 'data'],
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
