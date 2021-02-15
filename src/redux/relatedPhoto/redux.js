import {createActions, createReducer} from "reduxsauce";

const initialState = {
    photoRelated:{
        results:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    getPhotoRelated:['id', 'data'],
}, {
    prefix: 'RELATED_PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
