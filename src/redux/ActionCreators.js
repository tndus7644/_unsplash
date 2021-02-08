import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as AppAction} from './app/redux'
import {Action as AuthAction} from './auth/redux'
import {Action as TopicAction} from './topic/redux'
import {Action as PhotoAction} from './photo/redux'

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const authActions = bindActionCreators(AuthAction.Creators, dispatch);
export const topicActions = bindActionCreators(TopicAction.Creators, dispatch);
export const photoActions = bindActionCreators(PhotoAction.Creators, dispatch);
