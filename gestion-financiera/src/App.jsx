import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import InputField from './components/InputField'
import TextAreaField from './components/TextAreaField'
import SelectField from './components/SelectField'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Dashboard />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <InputField />
      <br /> <br />
      <TextAreaField />
      
      <SelectField
          name="category"
          value={formData.category}
          onChange={handleChange}
          options={[
            { value: '', label: 'Select Category' },
            { value: 'category1', label: 'Category 1' },
            { value: 'category2', label: 'Category 2' }
          ]}
        />
    </>
  )
}

export default App
