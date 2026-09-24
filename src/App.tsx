// src/App.tsx
// The root component: defines which page appears at which address.

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Destinations from './pages/Destinations'
import ExperiencesPage from './pages/Experiences'
import FAQ from './pages/FAQ'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PlanTrip from './pages/PlanTrip'
import SafariPackages from './pages/SafariPackages'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="experiences" element={<ExperiencesPage />} />
          <Route path="sample-itineraries" element={<SafariPackages />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="plan-my-trip" element={<PlanTrip />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App