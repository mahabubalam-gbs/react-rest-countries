import React from 'react';

const Country = ({ country }) => {
    console.log(country)
    return (
        <div className='countryCard'>
            <img style={{ height: '200px', width: '100%' }} src={country?.flags?.png
            } alt="" />
            <div style={{ padding: '20px 24px' }}>
                <h4 style={{ fontWeight: 'bold', margin: '0' }}>{country?.name?.official}</h4>
                <p>Population: {country?.population?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p>Region: {country?.region}</p>
                <p>Capital: {country?.capital}</p>
            </div>
        </div>
    );
};

export default Country;