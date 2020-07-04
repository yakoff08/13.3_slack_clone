import React from 'react'
// import { useSelector } from 'react-redux'

const Chat = () => {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      {/* <!-- Top bar --> */}
      {/* <div className="border-b flex px-6 py-2 items-center flex-none">
        <div className="flex flex-col">
          <h3 className="text-gray-800 mb-1 font-extrabold">#general</h3>
          <div className="text-gray-600 text-sm truncate">
            Chit-chattin&#39; about ugly HTML and mixing of concerns.
          </div>
        </div>
        <div className="ml-auto hidden md:block">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="appearance-none border border-gray rounded-lg pl-8 pr-4 py-2"
            />
          </div>
        </div>
      </div> */}

      {/* <!-- Chat messages --> */}
      <div className="px-6 py-4 flex-1 overflow-y-scroll">
        {/* <!-- A message --> */}
        <div className="flex items-start mb-4 text-sm">
          <img
            alt="profile"
            src="https://icons.iconarchive.com/icons/artua/dragon-soft/256/User-icon.png"
            className="w-10 h-10 rounded mr-3"
          />
          <div className="flex-1 overflow-hidden">
            <div>
              <span className="font-bold">Steve Schoger</span>
              <span className="text-gray text-xs">11:46</span>
            </div>
            <p className="text-black leading-normal">The slack from the other side.</p>
          </div>
        </div>

        {/* <!-- A message --> */}
        <div className="flex items-start mb-4 text-sm">
          <img
            alt="profile"
            src="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg"
            className="w-10 h-10 rounded mr-3"
          />
          <div className="flex-1 overflow-hidden">
            <div>
              <span className="font-bold">Adam Wathan</span>
              <span className="text-gray text-xs">12:45</span>
            </div>
            <p className="text-black leading-normal">
              How are we supposed to control the marquee space without an utility for it? I propose
              this:
            </p>
            <div className="bg-gray-200 border border-grey-light text-gray-800 text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
              {`.marquee-lightspeed { -webkit-marquee-speed: fast; }
.marquee-lightspeeder { -webkit-marquee-speed: faster; }`}
            </div>
          </div>
        </div>

        {/* <!-- A message --> */}
        <div className="flex items-start mb-4 text-sm">
          <img
            alt="profile"
            src="https://icons.iconarchive.com/icons/artua/dragon-soft/256/User-icon.png"
            className="w-10 h-10 rounded mr-3"
          />
          <div className="flex-1 overflow-hidden">
            <div>
              <span className="font-bold">David Hemphill</span>
              <span className="text-grey text-xs">12:46</span>
            </div>
            <p className="text-black leading-normal">
              <a href="#" className="inline-block bg-blue-lightest text-blue no-underline">
                @Adam Wathan
              </a>{' '}
              the size of the generated CSS is creating a singularity in space/time, we must stop
              adding more utilities before it&#39;s too late!
            </p>
          </div>
        </div>
        <div className="flex items-start mb-4 text-sm">
          <img
            alt="profile"
            src="https://icons.iconarchive.com/icons/artua/dragon-soft/256/User-icon.png"
            className="w-10 h-10 rounded mr-3"
          />
          <div className="flex-1 overflow-hidden">
            <div>
              <span className="font-bold">Steve Schoger</span>
              <span className="text-grey text-xs">11:46</span>
            </div>
            <p className="text-black leading-normal">The slack from the other side.</p>
          </div>
        </div>
        {/* <!-- A message --> */}
        <div className="flex items-start mb-4 text-sm">
          <img
            alt="profile"
            src="https://icons.iconarchive.com/icons/artua/dragon-soft/256/User-icon.png"
            className="w-10 h-10 rounded mr-3"
          />
          <div className="flex-1 overflow-hidden">
            <div>
              <span className="font-bold">David Hemphill</span>
              <span className="text-grey text-xs">12:46</span>
            </div>
            <p className="text-black leading-normal">
              <a href="#" className="inline-block bg-blue-lightest text-blue no-underline">
                @Adam Wathan
              </a>{' '}
              the size of the generated CSS is creating a singularity in space/time, we must stop
              adding more utilities before it&#39;s too late!
            </p>
          </div>
        </div>
        <div className="flex items-start mb-4 text-sm">
          <img
            alt="profile"
            src="https://icons.iconarchive.com/icons/artua/dragon-soft/256/User-icon.png"
            className="w-10 h-10 rounded mr-3"
          />
          <div className="flex-1 overflow-hidden">
            <div>
              <span className="font-bold">Steve Schoger</span>
              <span className="text-grey text-xs">11:46</span>
            </div>
            <p className="text-black leading-normal">The slack from the other side.</p>
          </div>
        </div>
      </div>

      <div className="flex m-6 rounded-lg border-2 border-grey overflow-hidden">
        <span className="text-3xl text-grey px-3 border-r-2 border-grey">+</span>
        <input type="text" className="w-full px-4" placeholder="Message to #general" />
      </div>
    </div>
  )
}

Chat.propTypes = {}

export default Chat
