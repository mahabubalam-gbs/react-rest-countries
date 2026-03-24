import { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    const countries = use(countriesPromise)

    return (
        <div style={{ width: '80%', margin: 'auto', padding: '30px 0px' }}>
            <h1 style={{ color: 'white' }}>Travelling Countries: {countries.length}</h1>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca2

                    } country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;