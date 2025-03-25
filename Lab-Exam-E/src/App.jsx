import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountDownLightSwitch from './components/CountDownLightSwitch'
import './components/CountDownLightSwitch.css'
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <CountDownLightSwitch/>
    
  )
}

export default App
