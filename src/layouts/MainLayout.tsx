// src/layouts/MainLayout.tsx
// The frame shared by every page: header on top, footer at the bottom,
// plus the floating WhatsApp button, the mobile sticky CTA bar, and page-specific SEO tags.

import { Outlet } from 'react-router-dom'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileCta from '../components/MobileCta'
import RouteSeo from '../components/RouteSeo'
import ScrollToTop from '../components/ScrollToTop'

function MainLayout() {
  return (
    <>
      <RouteSeo />
      <ScrollToTop />
      <Header />
      <div className="pb-20 lg:pb-0">
        <Outlet />
        <Footer />
      </div>
      <FloatingWhatsApp />
      <MobileCta />
    </>
  )
}

export default MainLayout