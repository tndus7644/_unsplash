import {combineReducers} from 'redux';

import appReducer from './app/redux';
import authReducer from './auth/redux';
import topicReducer from './topic/redux';
import photoReducer from './photo/redux';

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    topic: topicReducer,
    photo: photoReducer
});

export default reducers;