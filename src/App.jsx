import React, { useEffect, useState } from 'react'
import './App.css'
import Country from './components/Country'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  return (
    <div className="container">
      <h1>All Countries Are Here</h1>
      <div className='countries'>
        {
          countries.map(country => <Country
            key={country.cca3            }
            country={country}
          ></Country>)
        }
      </div>
    </div>
  )
}

export default App
