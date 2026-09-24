// src/App.tsx
// The root component. Later this will hold the router and shared layout.

import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
