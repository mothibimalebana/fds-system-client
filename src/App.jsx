import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

let router = createBrowserRouter([
  {
    path: '/',
    Component: <Dashboard/>
  }
])
function App() {

  return (
    <>
    <Nav pageTitle={'Overview'}/>
    </>
  )
}

export default App
