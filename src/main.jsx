import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App.jsx"

// Only run this in the browser
if (typeof window !== "undefined") {
  const root = document.getElementById("root")
  if (root) {
    createRoot(root).render(
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>,
    )
  }
}

export default App
