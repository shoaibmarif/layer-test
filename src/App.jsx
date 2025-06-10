import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductPage } from './pages/ProductPage'
import {Footer} from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductPage />
      <Footer />
    </>
  )
}

export default App
