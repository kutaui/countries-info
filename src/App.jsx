import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import "./App.css"


function App() {
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
    <Header />
    <Main />
  </>
}

export default App
