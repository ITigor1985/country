import { getAllCountries } from 'api/api';
import { useEffect, useState } from 'react';

export const App = () => {
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCoutry = async () => {
      try {
        const data = await getAllCountries();
        const countriesAll = data.map(contry => {
          return contry;
        });
        setCountries(countriesAll);
      } catch (error) {
        console.log(error);
      }
    };
    getCoutry();
  }, []);

  console.log(countries);
  return (
    <>
      {countries.length > 0 && (
        <div>
          {countries.map(country => (
            <div style={{ display: 'inline-block' }}>
              <img
                key={country.name.common}
                src={country.coatOfArms.png}
                alt={country.name.common}
                width={'300px'}
              />
              <p>{country.name.common}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
