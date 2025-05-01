import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App';
import Dashboard from './dashboard/Dashboard';
import Transactions from './components/pages/Transactions';
import Accounts from './components/pages/Accounts';
import Investments from './components/pages/Investments';
import Loans from './components/pages/Loans';
import Services from './components/pages/Services';
import Settings from './components/pages/Settings';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, path: "Dashboard", element: <Dashboard/>},
      {path: "Transactions", element: <Transactions/>},
      {path: "Accounts", element: <Accounts/>},
      {path: "Investments", element: <Investments/>},
      {path: "Loans", element: <Loans/>},
      {path: "Services", element: <Services/>},
      {path: "Settings", element: <Settings/>}
    ]
  }
])


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);