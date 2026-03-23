import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    const countries = use(countriesPromise)

    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <h1 style={{ color: 'white' }}>Travelling Countries: {countries.length}</h1>
            {
                countries.map(country => <Country key={country?.cca2

                } country={country}></Country>)
            }
        </div>
    );
};

export default Countries;