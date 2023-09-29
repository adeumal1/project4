import './App.css'

function App() {
  // Recuperamos la fecha actual en un formato ISO -> 2023-01-01
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  console.log(today);
  return (
    <>
      
    </>
  )
}

export default App
