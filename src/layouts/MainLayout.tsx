// src/layouts/MainLayout.tsx
// The frame shared by every page: header on top, footer at the bottom.
// <Outlet /> is where the current page appears.

import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout