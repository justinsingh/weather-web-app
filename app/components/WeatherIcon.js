var React = require('react');
var PropTypes = React.PropTypes;
var helpers = require('../utils/timeHelpers.js');

var styles = {
  text: {
    fontSize: '35px',
    fontWeight: '100'
  }
}

function WeatherIcon (props) {
  return (
    <div style={{width: '350px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', margin: '30px', textAlign: 'center', float: 'left'}}>
      <img style={{cursor: 'pointer'}} src={props.source} height="140px" width="140px" onClick={props.clickEvent}/> 
      <div style={styles.text}>
        {helpers.getDay(props.id)}, {helpers.getMonth()} {helpers.getDate(props.id)}
      </div>
    </div>
  );
}

WeatherIcon.PropTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

module.exports = WeatherIcon;
