import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import NavH from './components/nav/NavH'

function App() {

  return (
    <>
    <div className="app">
      <Nav />
      <div className="outlet col-start-2 col-end-3 w-full">
        <NavH/>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default App
