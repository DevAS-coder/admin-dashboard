import {Outlet} from 'react-router-dom'
import TokenChecker from './TokenChecker'
import Sidebar from './Components/Dashboard/Sidebar/Sidebar'
import { useContext } from 'react'
import { SideContext } from './Contexts/SidebarContext'
import Header from './Components/Dashboard/Header/Header'

function Layout() {

  const {isOpen} = useContext(SideContext)

  return (
    <div className='bg-black min-h-screen'>
        <TokenChecker/>
        <Sidebar/>
        <Header/>
        <div className={`${isOpen ? 'md:mr-65' : 'mr-16 md:mr-21'} transition-all duration-300 ease-in-out pt-18`}><Outlet/></div>
    </div>
  )
}

export default Layout