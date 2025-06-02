import { useState } from 'react'
import userData from './userData.json'
import friends from './friends.json'
import Profile from './components/Profile.jsx'
import FriendList from "./components/FriendList.jsx"
import TransactionsTableHistory from "./components/TransactionsTableHistory.jsx"
import transactions from "./transactions.json"

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
      <TransactionsTableHistory items={transactions}/>
    </>
  )
}

export default App
