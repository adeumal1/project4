import React, { useEffect, useState } from 'react'
import './App.css'
import Figure from './components/Figure'

function App() {
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "81GWdam7N8Wd1gEIso59h4iCZ2DMnCqpKvUZhk7V";
  
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date,setDate] = useState(today);

  const [list, setList] = useState([]);
  useEffect(()=>{
    (async ()=>{
        const data = await fetch(`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
        ).then(
        (response) => response.json()
        );
        setList(data);
    })();
  }, [date])
  
  const handleInput = (e) => {
    console.log(e.target.value);
    setDate(e.target.value.toLocaleString()); 
    console.log(e.target.value);
  };
  
  return (
    <>
      <h1>Imagen astronómica del día</h1>
      <input type='date' name='date' value={date} onChange={handleInput}></input>
      <p>Esta imagen corresponde con la fecha {date}</p>
      <Figure APOD={list}/>
    </>
  )
}

export default App
