var axios = require('axios');

var key = "3860815cdf38d9acaa06f0e43f6d01e4";

var weatherHelpers = {
  getCityWeather: function (city) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + key);
  },
  getFiveDays: function (city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + key + '&cnt=4');
  }
};

function getTheWeather (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + key);
}



module.exports = weatherHelpers;
