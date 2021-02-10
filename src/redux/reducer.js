import {combineReducers} from 'redux';

import appReducer from './app/redux';
import authReducer from './auth/redux';
import topicReducer from './topic/redux';
import photoReducer from './photo/redux';
import searchphotoReducer from './searchPhoto/redux';
import collectionsPhotoReducer from './collectionsPhoto/redux';

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    topic: topicReducer,
    photo: photoReducer,
    search: searchphotoReducer,
    collection: collectionsPhotoReducer,
});

export default reducers;