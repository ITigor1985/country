import axios from 'axios';
export const getAllCountries = async () => {
  //axios.defaults.baseURL = `http://localhost:4000/`;
  axios.defaults.baseURL = `https://restcountries.com/v3.1/all`;
  //let url = `https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e`;
  const response = await axios.get(`${axios.defaults.baseURL}`);
  // const response = await fetch(url);
  // if (response.ok) {
  //   let json = await response.json();
  //   return json;
  // } else {
  //   return response.status;
  // }
  return response.data;
};
