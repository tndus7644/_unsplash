import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as AppAction} from './app/redux'
import {Action as AuthAction} from './auth/redux'
import {Action as TopicAction} from './topic/redux'
import {Action as PhotoAction} from './photo/redux'
import {Action as SearchPhotoAction} from './searchPhoto/redux'
import {Action as CollectionsPhoto} from './collectionsPhoto/redux'
import {Action as SearchUsers} from './searchUsers/redux'

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const authActions = bindActionCreators(AuthAction.Creators, dispatch);
export const topicActions = bindActionCreators(TopicAction.Creators, dispatch);
export const photoActions = bindActionCreators(PhotoAction.Creators, dispatch);
export const SearchPhotoActions = bindActionCreators(SearchPhotoAction.Creators, dispatch);
export const CollectionsPhotosActions = bindActionCreators(CollectionsPhoto.Creators, dispatch);
export const SearchUserActions = bindActionCreators(SearchUsers.Creators, dispatch);
