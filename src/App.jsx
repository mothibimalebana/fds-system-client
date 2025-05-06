import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import NavH from './components/nav/NavH'
import { CardProvider } from './context/CardContext'

function App() {

  return (
    <CardProvider>
    <div className="app">
      <Nav />
      <div className="outlet col-start-2 col-end-3">
        <NavH/>
        <Outlet/>
      </div>
    </div>
    </CardProvider>
  )
}

export default App
