import "./App.css"
import Nav from "./components/nav/Nav"
import Dashboard from "./pages/dashboard/Dashboard"

function App() {
  return (
    <>
      <Nav pageTitle={"Overview"} />
      <div className="content-container md:ml-[250px]">
        <Dashboard />
      </div>
    </>
  )
}

export default App
