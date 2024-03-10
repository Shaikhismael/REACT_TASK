import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import EditModal from './components/EditModal.jsx'
import { UserContextProvider } from './context/UserContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={
      <UserContextProvider>
        <App />
      </UserContextProvider>
    }>
      <Route path='/:id' element={<EditModal />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  // </React.StrictMode>,
)
