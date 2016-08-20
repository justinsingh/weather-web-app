var React = require('react');
var styleSheet = require('../styles');
var WeatherIcon = require('../components/WeatherIcon.js');
var PropTypes = React.PropTypes;

var styles = {
  text: {
    fontSize: '35px',
    fontWeight: '100',
    textAlign: 'center'
  }
};

function Details (props) {
  return (
    <div style={styleSheet.container}>
      <div style={{marginTop: '170px'}}>
        <div style={styleSheet.transContainer}>
          <div style={styleSheet.content}>
            <div style={{display: 'table', margin: '0 auto'}}>
              <WeatherIcon source={props.onGetImage} id={props.id} />
              <div style={styles.text}>
                <div>{props.locationName}</div>
                <div>{props.description}</div>
                <div>min temp: {props.min} degrees</div>
                <div>max temp: {props.max} degrees</div>
                <div>humidity: {props.humidity}</div>
              </div>
            </div>
          </div>
          <div style={styleSheet.background}></div>
        </div>
      </div>
    </div>
  );
} 

Details.PropTypes = {
  onGetImage: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  locationName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  humidty: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

module.exports = Details;
