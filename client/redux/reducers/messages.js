const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState = {
  userId: '',
  messageId: '',
  messageContent: '',
  timestamp: '',
  meta: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [action.message.id]: {
          userId: action.message.userId,
          messageId: action.message.messageId,
          messageContent: action.message.messageContent,
          timestamp: new Date().toDateString(),
          meta: ''
        }
      }
    default:
      return state
  }
}

export function addMessage(message) {
  return { type: ADD_MESSAGE, message }
}
