import { useState } from 'react'
import userData from './userData.json'
import friends from './friends.json'
import Profile from './components/Profile.jsx'
import FriendList from "./components/FriendList.jsx"

function App() {

  return (
    <>
      <Profile
      name={userData.name}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
      />  
      <FriendList friends={friends} className="p-2"/>
    </>
  )
}

export default App
