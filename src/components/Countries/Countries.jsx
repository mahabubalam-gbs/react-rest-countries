import { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const countries = use(countriesPromise)

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)

    }

    return (
        <div style={{ width: '80%', margin: 'auto', padding: '30px 0px' }}>
            <h1 style={{ color: 'white' }}>Travelling Countries: {countries.length}</h1>

            <h2 style={{ color: 'white' }}>Traveled So Far: {visitedCountries.length}</h2>

            <div className='visited-countries-flags'>
                <div >
                    {
                        visitedCountries.map(country => <img style={{ marginRight: '10px' }} src={country?.flags?.png}></img>)
                    }
                </div>
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca2}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;