import { useState } from 'react';
import './App.css'

function App() {
  
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [date,setDate] = useState(today);

  const handleInput = (e) => {
    setDate(e.target.value.toLocaleString()); 
  };
  
  return (
    <>
      <input type='date' name='date' value={date} onChange={handleInput}></input>
    </>
  )
}

export default App
