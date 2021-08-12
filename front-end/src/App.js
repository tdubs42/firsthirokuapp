import {
  useEffect,
  useState,
} from 'react'
import './App.css'

const url = path => {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:400${path}`
    : path
}

function App () {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(url('/api/'))
      .then(res => res.json())
      .then(apiData => setData(apiData.data))
  }, [])
  
  return ( <section className='App'>
      <header className='App-header'>
        <h1 >tdubs 1st REST API</h1 >
        <h2>{data}</h2>
      </header >
    </section > )
}

export default App
