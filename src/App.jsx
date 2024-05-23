import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'></div>
    <HeroSection/>
    </>
  )
}

export default App
