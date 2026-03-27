import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className='countryCard'>
            <img style={{ height: '200px', width: '100%' }} src={country?.flags?.png
            } alt="" />
            <div style={{ padding: '20px 24px' }}>
                <h2 style={{ fontWeight: 'bold' }}>{country?.name?.common}</h2>
                <h4 style={{ margin: '0' }}>{country?.name?.official}</h4>
                <p>Population: {country?.population?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p>Region: {country?.region}</p>
                <p>Capital: {country?.capital}</p>
                <button
                    onClick={handleVisited}
                    className={visited ? 'visited' : 'not-visited'}>{
                        visited ? 'Visited' : 'Not Visited'}</button>
            </div>
        </div>
    );
};

export default Country;