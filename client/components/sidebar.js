import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addChannel,
  setNewChannel
  // addNewUserToChannel,
  // deleteUserFromChannel
} from '../redux/reducers/channels'

const Sidebar = () => {
  const users = useSelector((s) => s.users)
  const channelsList = useSelector((s) => s.channels.channelsList)
  const currentChannel = useSelector((s) => s.channels.currentChannel)

  const [channelAddPressed, setChannelAddPressed] = useState(false)
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  // const currChatUser = 'user1'

  return (
    <div className="bg-indigo-800 text-purple-lighter flex-none w-64 pb-6 hidden md:block">
      <div className="text-white mb-2 mt-3 px-4 flex justify-between">
        <div className="flex-auto">
          <h1 className="font-semibold text-xl leading-tight mb-1 truncate">CHAT ROOM</h1>
          {/* <div className="flex items-center mb-6">
            <span className="text-white opacity-50 text-sm">Adam Wathan</span>
          </div> */}
        </div>
        {/* <div>
          <svg className="h-6 w-6 fill-current text-white opacity-25" viewBox="0 0 20 20">
            <path
              d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
              fillRule="evenodd"
            />
          </svg>
        </div> */}
      </div>

      <div className="mb-8">
        <div className="px-4 mb-2 text-white flex justify-between items-center">
          <div className="opacity-75">Channels</div>
          <div>
            <button type="button" onClick={() => setChannelAddPressed(true)}>
              <svg
                className="fill-current h-4 w-4 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
              </svg>
            </button>
          </div>
        </div>
        {channelAddPressed && (
          <div>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-36 appearance-none leading-normal mb-2 mx-4"
              type="text"
              placeholder="new channel name"
              value={value}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  dispatch(addChannel(e.target.value))
                  setChannelAddPressed(false)
                  setValue('')
                }
              }}
              onChange={(e) => {
                setValue(e.target.value)
              }}
            />
          </div>
        )}
        {Object.keys(channelsList).map((channel) => {
          return (
            <div
              key={channel}
              className={`${channel === currentChannel && 'bg-teal-600'} py-1 px-4 text-white`}
            >
              <button type="button" onClick={() => dispatch(setNewChannel(channel))}>
                #{currentChannel.channelName}
              </button>
            </div>
          )
        })}
      </div>

      <div className="mb-8">
        {/* <div className="px-4 mb-2 text-white flex justify-between items-center">
          <div className="opacity-75">Direct Messages</div>
          <div>
            <svg
              className="fill-current h-4 w-4 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
            </svg>
          </div>
        </div> */}

        {Object.keys(users).map((user) => {
          const currentUser = users[user]
          return (
            <div key={currentUser.userId} className="flex items-center mb-3 px-4">
              {/* <span
                className={`${
                  (currentUser.isOnline && 'bg-green-500 rounded-full block w-2 h-2 mr-2') ||
                  'border border-white rounded-full w-2 h-2 mr-2'
                }`}
              /> */}
              <span className="text-white opacity-75">{currentUser.userName}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar
