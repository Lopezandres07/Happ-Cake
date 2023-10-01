import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import NavBarMenu from './components/NavBarMenu'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <NavBarMenu />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/Contact'
          element={<Contact />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
