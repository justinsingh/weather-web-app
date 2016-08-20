var React = require('react');
var PropTypes = React.PropTypes;

var styles = require('../styles');

function GetWeather (props) {
  return (
    <div className='col-sm-12'> 
      <form onSubmit={props.onSubmitUser}>
        <div className='form-group'>
          <input
            className='form-control'
            style={styles.inputCenter}
            placeholder='City, State'
            onChange={props.onUpdateUser}
            value={props.city}
            type='text' />
        </div>
        <div className='form-group'  > 
          <button
            className="btn btn-block btn-success center-block"
            style={{width: '115px'}}
            type='submit'>
            Get Weather
          </button>
        </div>
      </form>
    </div>
  );
}

GetWeather.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

module.exports = GetWeather;
