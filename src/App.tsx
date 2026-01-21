import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import ClientPage from './pages/ClientPage'
import AddStorePage from './pages/AddStorePage'
import StoreDashboardPage from './pages/StoreDashboardPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/client" element={<ClientPage />} />
      <Route path="/add-store" element={<AddStorePage />} />
      <Route path="/store/:id" element={<StoreDashboardPage />} />
    </Routes>
  )
}

export default App
