import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar></Sidebar>
    <Main/>
      
        
    </>
  )
}

export default App
