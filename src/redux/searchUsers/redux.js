import {createActions, createReducer} from "reduxsauce";

const initialState = {
    UsersResults:{
        results:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    SearchUsers:['data']
}, {
    prefix: 'SEARCH_USERS/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});