import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppHeader from './layout' // layout chính có Outlet
import BookPage from './components/layout/client/book'
import AboutPage from './components/layout/client/about'
import LoginPage from './components/layout/client/auth/login'
import RegisterPage from './components/layout/client/auth/register'
import './styles/global.scss'
// ✅ Định nghĩa toàn bộ route
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppHeader />, // AppHeader là layout chứa Outlet
    children: [
      
      { path: 'book', element: <BookPage/> },
      { path: 'about', element: <AboutPage/> },
      { path: 'login', element: <LoginPage/> },
      { path: 'register', element: <RegisterPage/> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
