import {Outlet} from 'react-router-dom'
import TokenChecker from './TokenChecker'
import Sidebar from './Components/Dashboard/Sidebar/Sidebar'
import { useContext } from 'react'
import { SideContext } from './Contexts/SidebarContext'

function Layout() {

  const {isOpen} = useContext(SideContext)

  return (
    <div className='bg-black min-h-screen'>
        <TokenChecker/>
        <Sidebar/>
        <div className={`${isOpen ? 'mr-72' : 'mr-28'} transition-all duration-300 ease-in-out pt-7`}><Outlet/></div>
    </div>
  )
}

export default Layout