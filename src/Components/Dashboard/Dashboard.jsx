import React, { useContext } from 'react'
import { Usercontext } from '../../Contexts/Userinfo'

function Dashboard() {
  const {name, Username} = useContext(Usercontext)

  return (
    <div>
      <h1 className=' text-white text-2xl'>سلام {name} خوش اومدی!👋</h1>
    </div>
  )
}

export default Dashboard