import {combineReducers} from 'redux';

import appReducer from './app/redux';
import authReducer from './auth/redux';
import topicReducer from './topic/redux';
import photoReducer from './photo/redux';
import searchPhotoReducer from './searchPhoto/redux';
import collectionsPhotoReducer from './collectionsPhoto/redux';
import searchUsers from './searchUsers/redux';
import topicPhotoReducer from './topicPhoto/redux';
import relatedPhotoReducer from './relatedPhoto/redux';

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    topic: topicReducer,
    photo: photoReducer,
    search: searchPhotoReducer,
    collection: collectionsPhotoReducer,
    searchUsers: searchUsers,
    topicPhoto: topicPhotoReducer,
    relatedPhoto: relatedPhotoReducer,
});

export default reducers;