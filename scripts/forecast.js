// Responsible for interacting with the API and getting data

// const api_key = 'FZDdoMnY4GNCtH97Bhxp1Sgk5lJGLjLz';

// // get weather information
const getWeather = async (id) => {

const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
const query = `${id}?apikey=${apiKey}`;

const response = await fetch(base + query);
const data = await response.json();

return data[0];
// console.log(data[0]);


}; 


// get city information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
  // console.log(data[1]);
 
 
};

// getCity('windsor');
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err));

// getWeather("326270");

// getCity('windsor').then(data => {
//   return getWeather(data.Key);
// }).then(data => {
//   // console.log(data);
// }).catch(err => console.log(err));

