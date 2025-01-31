import {Outlet} from 'react-router-dom'
import TokenChecker from './TokenChecker'
import Sidebar from './Components/Dashboard/Sidebar/Sidebar'

function Layout() {
  return (
    <div className='bg-black min-h-screen'>
        <TokenChecker/>
        <Sidebar/>
        <div className="mr-72 pt-10"><Outlet/></div>
    </div>
  )
}

export default Layout