var React = require('react');
var styles = require('../styles/');
var GetWeatherContainer = require('../containers/GetWeatherContainer.js');

function Home () {
  return (
    <div className='col-sm-6 text-center' style={styles.container}>
      <div style={styles.centerDiv}>
        <h1 style={styles.header}>Enter a City and State</h1>
        <GetWeatherContainer />
      </div>
    </div>
  );
}

module.exports = Home;
