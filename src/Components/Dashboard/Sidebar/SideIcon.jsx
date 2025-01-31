import React, { useContext } from 'react'
import { SideContext } from '../../../Contexts/SidebarContext'

function SideIcon({icon}) {
  const {isOpen} = useContext(SideContext)

  return (
    <i className={`${icon} sidebar-icon ${isOpen ? 'mr-0' : 'mr-1'}`}></i>
  )
}

export default SideIcon