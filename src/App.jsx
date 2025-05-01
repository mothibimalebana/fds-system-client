import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'

function App() {

  return (
    <>
    <div className="app">
      <Nav />
      <div className="outlet"><Outlet/></div>
    </div>
    </>
  )
}

export default App
