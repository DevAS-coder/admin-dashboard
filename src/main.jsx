import App from './App.jsx'
import Layout from './Layout.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import ChartsPage from './Components/Dashboard/ChartsPage.jsx'
import OrdersPage from './Components/Dashboard/OrdersPage/OrdersPage.jsx'
import TicketsPage from './Components/Dashboard/TicketsPage.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotificationContext } from './Contexts/NotificationContext.jsx'
import { Userinfo } from './Contexts/Userinfo.jsx'
import { AuthContext } from './Contexts/AuthContext.jsx'
import { SidebarContext } from './Contexts/SidebarContext.jsx'
import { OrdersPageContext } from './Contexts/OrderPageContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <App />,
    loader: () => { document.title = 'داشبورد | ورود / ثبت نام' }
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard />, loader: () => { document.title = 'داشبورد | صفحه اصلی' } },
      { path: '/dashboard/charts', element: <ChartsPage />, loader: () => { document.title = 'داشبورد | نمودار ها' } },
      { path: '/dashboard/orders', element: <OrdersPage />, loader: () => { document.title = 'داشبورد | سفارشات' } },
      { path: '/dashboard/tickets', element: <TicketsPage />, loader: () => { document.title = 'داشبورد | تیکت ها' } },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <Userinfo>
        <NotificationContext>
          <SidebarContext>
            <OrdersPageContext>
              <RouterProvider router={router} />
            </OrdersPageContext>
          </SidebarContext>
        </NotificationContext>
      </Userinfo>
    </AuthContext>
  </StrictMode>,
)
