import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react"
import InventoryPage from "./pages/InventoryPage";
import ContactusPage from "./pages/ContactUsPage";
import SupplyChainPage from "./pages/SupplyChainPage";
import SmartContract from "./pages/SmartContract";
import MyContractPage from "./pages/MyContractPage";
function App() {
  return ( 
    
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<LandingPage/>} />
              <Route exact path="/login" element={<LoginPage/>} />
              <Route exact path="/register" element={<RegisterPage/>} />
              <Route exact path="/inventory" element={<InventoryPage/>} />
              <Route exact path="/contactus" element={<ContactusPage/>} />
              <Route exact path="/track" element={<SupplyChainPage/>} />
              <Route exact path="/smartcontract" element={<SmartContract/>} />
              <Route exact path="/my-contracts" element={<MyContractPage/>} />
              {/* <Route path="/" component={Dashboard} /> */}
            </Routes>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App
