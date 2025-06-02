import { useState } from 'react'
import userData from './userData.json'
import Profile from './Profile.jsx'
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
    </>
  )
}

export default App
