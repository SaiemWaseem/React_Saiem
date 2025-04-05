import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  
  const addValue = () => {
    setCounter(counter => {
      if (counter >= 20) {
        alert("Counter is already at maximum value");
        return counter;  // Don't increase beyond 20
      }
      return counter + 1;
    });
  };
  const removeValue = () => {
    setCounter(counter => {
      if (counter <= 0) {
        alert("Counter is already at minimum value");
        return counter;  // Don't decrease below 0
      }
      return counter - 1;
    });
  };
  return (
    <>
      <h1>Saiem Aur React</h1>
      <h2>Counter : {counter}</h2>
      <button  onClick={addValue}> Add Value: {counter} </button>
      <br />
      <button onClick={removeValue}> Remove Value: {counter} </button>
    </>
  )
}

export default App
