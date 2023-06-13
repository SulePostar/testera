import './App.css'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import config from './config'

function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env);
  console.log("Server is running in " + import.meta.env.MODE + " mode.");
  if(import.meta.env.DEV) console.log("Tis is DEV server");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>{config.owner} --- {config.base}:{config.pass}</h3>
      <h1 className="text-6xl bg-black text-white p-12">Vite + React</h1>
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
    </>
  )
}

export default App
