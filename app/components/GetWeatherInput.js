var React = require('react');
var styles = require('../styles');

function GetWeatherInput () {
  return (
    <input
      className='form-control'
      style={styles.inputCenter}
      placeholder='City, State'
      type='text' />
  );
}

module.exports = GetWeatherInput;
