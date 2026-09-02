import { useState } from 'react'
import './App.css'
import WorkInProgress from './components/WorkInProgress'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WorkInProgress/>
    </>
  )
}

export default App
