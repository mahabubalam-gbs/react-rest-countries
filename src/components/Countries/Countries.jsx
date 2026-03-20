import React, { use } from 'react';

const Countries = ({ countriesPromise }) => {

    const countries = use(countriesPromise)
    console.log(countries)
    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <h1 style={{ color: 'white' }}>Travelling Countries: {countries.length}</h1>
        </div>
    );
};

export default Countries;