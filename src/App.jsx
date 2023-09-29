import React, { useEffect, useState } from 'react'
import './App.css'
import Figure from './components/Figure'
import axios from 'axios';

function App() {
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "81GWdam7N8Wd1gEIso59h4iCZ2DMnCqpKvUZhk7V";
  
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date,setDate] = useState(today);

  const [list, setList] = useState([]);

  useEffect(()=>{
    const getResponse = async () => {
      try {
           const response = await axios.get(`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`);
           setList(response.data);
      } catch(err) {
           console.log('err')
      }
    }
    getResponse();
  }, [date])
  
  const handleInput = (e) => {
    setDate(e.target.value.toLocaleString()); 
  };
  
  return (
    <>
      <h1>Imagen astronómica del día</h1>
      <input type='date' name='date' value={date} max={today} onChange={handleInput}></input>
      <p>Esta imagen corresponde con la fecha {date}</p>
      <Figure APOD={list}/>
    </>
  )
}

export default App
