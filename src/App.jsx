import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'

function App() {

  return (
    <>
    <div className="appp">
      <Nav pageTitle={'Overview'}/>
      <h1>Hello</h1>
    </div>
    </>
  )
}

export default App
