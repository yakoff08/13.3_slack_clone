const initialState = {
  user1: {
    userId: '001',
    userName: 'Big Sambrero',
    userPic:
      'https://icons.iconarchive.com/icons/aha-soft/free-large-boss/256/Mexican-Boss-icon.png',
    hashTag: '#sambrero'
    // isOnline: true
  },
  user2: {
    userId: '002',
    userName: 'Yakoff08',
    userPic: 'https://icons.iconarchive.com/icons/aha-soft/free-large-boss/256/Official-icon.png',
    hashTag: '#yakoff08'
    // isOnline: true
  },
  user3: {
    userId: '003',
    userName: 'Superman',
    userPic: 'https://icons.iconarchive.com/icons/aha-soft/free-large-boss/256/Superman-icon.png',
    hashTag: '#superman'
    // isOnline: true
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
