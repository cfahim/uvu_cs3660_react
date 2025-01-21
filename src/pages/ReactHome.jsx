import { useState } from 'react' // React hooks are supported, a way to manage state (the actual data in variables) in functional components
import reactLogo from '../assets/react.svg' // Vite supports importing images and other assets
import viteLogo from '/vite.svg' // Vite also supports aliases, like the / in this path
import './css/ReactHome.css' // this will inject all the css code in a <style> tag inside <head>
import MainLayout from './layouts/MainLayout'

function ReactHome() {
  const [count, setCount] = useState(0) // useState is a hook that returns a stateful value and a function to update it

  // <> is React.Fragment shorthand, like wrapping in a <div> but without adding the extra div to the DOM
  return (
    <MainLayout title="React Home | MyPage"> 
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>No Hot Reload</h1>
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
    </MainLayout>
  )
}

export default ReactHome
