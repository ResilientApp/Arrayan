import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react"
import InventoryPage from "./pages/InventoryPage";
import SupplyChainPage from "./pages/SupplyChainPage";


function App() {
  return (
    
      <div>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/home" element={<LandingPage/>} />
              <Route exact path="/" element={<LoginPage/>} />
              <Route exact path="/register" element={<RegisterPage/>} />
              <Route exact path="/inventory" element={<InventoryPage/>} />
              <Route exact path="/track" element={<SupplyChainPage/>} />
              {/* <Route path="/" component={Dashboard} /> */}
            </Routes>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App
