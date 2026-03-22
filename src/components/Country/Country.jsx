import React from 'react';

const Country = ({ country }) => {
    console.log(country)
    return (
        <div>
            <div className='countryCard'>
                <img className='.countryCard__flag' src={country?.flags?.png} alt="" />
                <div className='countryCard__content'>
                    <h2 style={{ fontWeight: 'bold' }}>{country?.name?.common}</h2>
                    <p>Population: {country?.population?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p>Region: {country?.region}</p>
                    <p>Capital: {country?.capital}</p>
                </div>
            </div>
        </div>
    );
};

export default Country;