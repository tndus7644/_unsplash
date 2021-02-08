import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list:[]
}

export const Action = createActions({
    updateState: ['props'],
    getTopics:['data']
}, {
    prefix: 'TOPIC/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});