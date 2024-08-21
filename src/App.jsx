
import Home from './pages/Home';
import Auth from './components/Auth/Auth';
import Login from './components/Auth/Login';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Admin from './components/Dashboard/Admin';
import Dashboard from './components/Dashboard/adminLayouts/Dashboard';
import Investments from './components/Dashboard/adminLayouts/Investments';
import Deposits from './components/Dashboard/adminLayouts/Deposits';
import Withdrawals from './components/Dashboard/adminLayouts/Withdrawals';
import Transfers from './components/Dashboard/adminLayouts/Transfers';
// import InvestmentLogs from './components/Dashboard/adminLayouts/logs/InvestmentLogs';
// import DepositLogs from './components/Dashboard/adminLayouts/logs/DepositLogs';
// import WithdrawLogs from './components/Dashboard/adminLayouts/logs/WithdrawLogs';
import InvestmentPlans from './pages/InvestmentPlans';

import './App.css'

const PUBLIC_URL = "/Einstein-Investments"

 const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            index: true,
            path: '/auth/login',
            element: <Login />
          },
          {
            path: '/auth/signup',
            element: <Signup />
          },
        ]
      },
      {
        path: '/plans',
        element: <InvestmentPlans />,
      },
      {
        path: '/dashboard',
        element: <Admin />,
        children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/dashboard/investments",
        element: <Investments />
      },
      {
        path: "/dashboard/deposit",
        element: <Deposits />
      },
      {
        path: "/dashboard/withdraw",
        element: <Withdrawals />
      },
      {
        path: "/dashboard/transfer",
        element: <Transfers />
      },
      // {
      //   path: "/dashboard/investment logs",
      //   element: <InvestmentLogs />
      // },
      // {
      //   path: "/dashboard/deposit logs",
      //   element: <DepositLogs />
      // },
      // {
      //   path: "/dashboard/withdrawal logs",
      //   element: <WithdrawLogs />
      // },
        ]
      },

    ]
  },
  {
    
  }
 ], {basename: "/Einstein-Investments"})

  function LayoutComponent() {
  return(
    
      <>
        <Outlet/>
      </>
    
  )
 }

function App() {
  return <RouterProvider router={router} />
}

export default App
