import { combineReducers } from 'redux'
import tweets from './tweets'
import users from './users'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
	tweets,
	users,
	authedUser,
	loadingBar: loadingBarReducer
})