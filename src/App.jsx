import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import './styles/App.css'

import Hero from "./pages/website/Hero"
import Auth from "./pages/website/Auth"
import PatientInformation from "./pages/app/PatientInformation"
import DoctorDashboard from "./pages/app/doctor/DoctorDashboard"
import AdminDashboard from "./pages/app/admin/AdminDashBoard"

const App = () => {
  return (
    <Router  basename="/DoctorAppointmentHCI/">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/patient_informtation" element={<PatientInformation />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient" element={<PatientInformation />} />
      </Routes>
    </Router>
  )
}

export default App