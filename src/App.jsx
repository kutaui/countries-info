import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './Pages/RootLayout'
import { ErrorPage } from './Pages/ErrorPage';
import { CountryDetails } from './Pages/CountryDetails'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/:id", element: <CountryDetails /> }
      ]

    }
  ])





  const theme = useSelector(state => state.theme.dark)
  useEffect(() => {
    const bodyElement = document.body;
    if (!theme) {
      bodyElement.classList.remove('light-mode');
    } else {
      bodyElement.classList.add('light-mode');
    }
  }, [theme]);


  return <>
    <RouterProvider router={router} />
  </>
}

export default App
