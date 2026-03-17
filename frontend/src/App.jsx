import { Routes, Route, useNavigate } from "react-router-dom"
import UploadPage from "./pages/UploadReport"

import Dashboard from "./pages/Dashboard"
import "./App.css"

function App() {

  return (

    <Routes>

      {/* Upload Page */}
      <Route path="/" element={<UploadPage />} />

      {/* Dashboard Page */}
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>

  )

}

export default App