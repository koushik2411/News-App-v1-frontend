import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' w-full h-full min-h-screen bg-gray-200 dark:bg-gray-800'>
        <Header/>
        <Home/>
      </div>
    </>
  )
}

export default App
