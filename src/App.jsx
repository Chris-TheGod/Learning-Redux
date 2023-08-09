import { useState } from 'react'
import './styles.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>The count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
