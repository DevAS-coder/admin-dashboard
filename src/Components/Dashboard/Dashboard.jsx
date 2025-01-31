import React, { useContext } from 'react'
import { Usercontext } from '../../Contexts/Userinfo'

function Dashboard() {
  const {name, Username} = useContext(Usercontext)

  return (
    <div><p className=' text-white'>{name}</p></div>
  )
}

export default Dashboard