import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import users from './users'
import channels from './channels'
import messages from './messages'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    users,
    channels,
    messages
  })

export default createRootReducer
