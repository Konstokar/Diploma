import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StartPage } from './pages/register-page/RegisterPage.tsx'
import { SelectPage } from './pages/select-page/SelectPage.tsx'

const router = createBrowserRouter([
  {
  path: "/start",
  element: <StartPage />
  },
  {
    path: "/select",
    element: <SelectPage />
    },
  ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

function createBrowseRouter(arg0: { path: string; element: import("react/jsx-runtime").JSX.Element }[]) {
  throw new Error('Function not implemented.')
  }

