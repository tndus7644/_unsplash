import {combineReducers} from 'redux';

import appReducer from './app/redux';
import topicReducer from './topic/redux';
import photoReducer from './photo/redux';
import searchPhotoReducer from './search/redux';
import collectionsPhotoReducer from './collectionsPhoto/redux';
import topicPhotoReducer from './topicPhoto/redux';

const reducers = combineReducers({
    app: appReducer,
    topic: topicReducer,
    photo: photoReducer,
    search: searchPhotoReducer,
    collection: collectionsPhotoReducer,
    topicPhoto: topicPhotoReducer,
});

export default reducers;