import {createActions, createReducer} from "reduxsauce";

const initialState = {
    searchResult: {
        results:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    searchPhoto:['data'],
}, {
    prefix: 'SEARCH_PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
