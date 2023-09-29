import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Figure from '../Figure/Figure';

const NASA_URL = "https://api.nasa.gov/";
const NASA_API_KEY = "81GWdam7N8Wd1gEIso59h4iCZ2DMnCqpKvUZhk7V";

const Mars = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date,setDate] = useState(today);

  const [list, setList] = useState([]);

  useEffect(()=>{

    const getResponse = async () => {
      try {
          const response = await axios.get(`${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`);
          setList(response.data.photos[1]);
          console.log(response.data.photos[1]);
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
    <div className='main'>
      <h1>Imagen astronómica del día</h1>
      <input type='date' name='date' value={date} max={today} onChange={handleInput}></input>
      <p>Esta imagen corresponde con la fecha {date}</p>
      {/* <Figure list={list}/> */}
    </div>
  )
}

export default Mars