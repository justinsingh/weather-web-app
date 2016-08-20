var React = require('react');
var styles = require('../styles');
var Loading = require('../components/Loading.js');
var WeatherIcon = require('../components/WeatherIcon.js');
var styleSheet = require('../styles');
var PropTypes = React.PropTypes;

function Forecast (props) {
  if (props.isLoading === true) {
    return <Loading />;
  }
  return (
    <div style={styles.container}>
    <div>
    <h1 style={{marginTop: '60px', textAlign: 'center', fontSize: '65px', fontWeight: '100', color: 'black'}}>
    {props.cityInfo[0].data.city.name} {props.cityInfo[0].data.city.country} 
        </h1>
      </div>
      <div style={{marginTop: '50px'}}>
        <div style={styleSheet.transContainer}>
          <div style={styleSheet.content}>
            <div style={{margin: '0 auto', display: 'table'}}>
              <div> 
                <WeatherIcon source={props.onGetImage(0)} id={0} clickEvent={props.onClickImage.bind(this, 0)}/>

                <WeatherIcon source={props.onGetImage(1)} id={1} clickEvent={props.onClickImage.bind(this, 1)}/>
              </div>
              <div> 
                <WeatherIcon source={props.onGetImage(2)} id={2} clickEvent={props.onClickImage.bind(this, 2)}/>
                <WeatherIcon source={props.onGetImage(3)} id={3} clickEvent={props.onClickImage.bind(this, 3)}/>
              </div>
            </div>
          </div>
          <div style={styleSheet.background}></div>
        </div>
      </div>
    </div>
  );
}

Forecast.PropTypes = {
  onGetImage: PropTypes.func.isRequired,
  onClickImage: PropTypes.func.isRequired,
  isLoading: PropTypes.string.isRequired,
  cityInfo: PropTypes.array.isRequired,
  fiveDayArrs: PropTypes.array.isRequired
}; 

module.exports = Forecast;
