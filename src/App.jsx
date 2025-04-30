"use client"

import "./App.css"
import Nav from "./components/nav/Nav"
import Dashboard from "./pages/dashboard/Dashboard"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Nav pageTitle={"Overview"} />
      <div className="content-container md:ml-[250px]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
