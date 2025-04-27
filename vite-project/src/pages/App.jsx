import { useState } from 'react'
import { MainLayout } from '../components/templates/indexLayout'
import '../styles/style.css'

function App() {
  const [theme, setTheme] = useState('light')


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark': 'light')
    console.log(theme)
  }

  return (
    <div className={`app ${theme}`}>
      {/* <button onClick={toggleTheme}>Switch</button> */}
      <MainLayout />
      
    </div>
  )
}

export default App
