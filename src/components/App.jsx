import { getAllCountries } from 'api/api';
import { useEffect, useState } from 'react';

export const App = () => {
  let [countries, setCountries] = useState([]);
  let [namesCountry, setNamesCountry] = useState([]);
  useEffect(() => {
    const getCoutry = async () => {
      try {
        const data = await getAllCountries();
        const countriesAll = data.map(contry => {
          return contry;
        });
        setCountries(countriesAll);

        if(countries.length > 0){
        const allNamesCountry = countries.map(countryName => countryName.name.common)
        setNamesCountry(allNamesCountry);
        }
        
      } catch (error) {
        console.log(error);
      }
    };
    getCoutry();
  }, [countries]);  
  
  return (
    <>
      {namesCountry.length > 0 && (
        <div>
          {namesCountry.sort().map(country => (  
              <p key={country}>{country}</p>
          ))}
        </div>
      )}
    </>
  );
};
