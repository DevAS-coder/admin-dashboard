import App from './App.jsx'
import Layout from './Layout.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotificationContext } from './Contexts/NotificationContext.jsx'
import { Userinfo } from './Contexts/Userinfo.jsx'
import { AuthContext } from './Contexts/AuthContext.jsx'
import { SidebarContext } from './Contexts/SidebarContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <Userinfo>
        <NotificationContext>
          <SidebarContext>
            <RouterProvider router={router} />
          </SidebarContext>
        </NotificationContext>
      </Userinfo>
    </AuthContext>
  </StrictMode>,
)
