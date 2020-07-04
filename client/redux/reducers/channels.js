const ADD_CHANNEL = 'ADD_CHANNEL'
const SET_NEW_CHANNEL = 'SET_NEW_CHANNEL'
const ADD_MESSAGE_TO_CHANNEL = 'ADD_MESSAGE_TO_CHANNEL'
const ADD_NEW_USER_TO_CHANNEL = 'ADD_NEW_USER_TO_CHANNEL'
const DELETE_USER_FROM_CHANNEL = 'DELETE_USER_FROM_CHANNEL'

const initialState = {
  channelsList: {
    general: {
      channelName: 'general',
      usersId: ['user1', 'user2', 'user3'],
      messages: [],
      isCurrent: true
    }
  },
  currentChannel: 'general'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return {
        ...state,
        channelsList: {
          ...state.channelsList,
          [action.channelName]: {
            usersId: [],
            messages: [],
            isCurrent: false
          }
        }
      }

    case SET_NEW_CHANNEL:
      return { ...state, currentChannel: action.channelId }

    case ADD_MESSAGE_TO_CHANNEL:
      return {
        ...state,
        channelsList: {
          ...state.channelsList,
          [action.channel]: {
            ...state.channelsList[action.channel],
            messages: [...state.channelsList[action.channel].messages, action.messages]
          }
        }
      }

    case ADD_NEW_USER_TO_CHANNEL:
      return {
        ...state,
        channelsList: {
          ...state.channelsList,
          [action.channel]: {
            ...state.channelsList[action.channel],
            usersId: [...state.channelsList[action.channel].usersId, action.userId]
          }
        }
      }

    case DELETE_USER_FROM_CHANNEL:
      return {
        ...state,
        channelsList: {
          ...state.channelsList,
          [action.channel]: {
            ...state.channelsList[action.channel],
            usersId: [
              ...state.channelsList[action.channel].usersId.filter((it) => it !== action.userId)
            ]
          }
        }
      }

    default:
      return state
  }
}

export function addChannel(channelName) {
  return { type: ADD_CHANNEL, channelName }
}

export function setNewChannel(channelId) {
  return { type: SET_NEW_CHANNEL, channelId }
}

export function addMessageToChannel(message, channel) {
  return { type: ADD_MESSAGE_TO_CHANNEL, message, channel }
}

export function addNewUserToChannel(userId, channel) {
  return { type: ADD_NEW_USER_TO_CHANNEL, userId, channel }
}

export function deleteUserFromChannel(userId, channel) {
  return { type: DELETE_USER_FROM_CHANNEL, userId, channel }
}
