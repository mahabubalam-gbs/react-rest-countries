import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'
import Header from './components/Header/Header'


function App() {
  const countriesPromise = fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,cca3,ccn3,cca2')
    .then(res => res.json())
  return (
    <>
      <Header></Header>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App

// https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,cca3,ccn3,cca2