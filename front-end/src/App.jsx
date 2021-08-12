import {
  useEffect,
  useState,
} from 'react'
import axios from 'axios'
import './App.css'

const url = path => {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:4000${path}`
    : path
}

function App () {
  const [data, setData] = useState("Don't forget to eat a taco")
  useEffect(() => {
    axios.get(url("/api/"))
      .then(res => setData(res.data.taco))
  }, [])
  
  return ( <section className='App'>
      <header className='App-header'>
        <h1 >tdubs 1st REST API</h1 >
      </header >
      <section >
        <h2 >The Data</h2 >
        <p >{data}</p >
      </section >
    </section > )
}

export default App
