var React = require('react');
var PropTypes = React.PropTypes;
var GetWeatherInput = require('../components/GetWeatherInput.js');
var GetWeatherButton = require('../components/GetWeatherButton.js');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles = {
  navbar: {
    backgroundColor: '#ff6600'
  },
  header: {
    fontSize: '35',
    color: '#fff',
    fontWeight: '100'
  },
  navbarDefault: {
    borderColor: '#ff6600'
  },
  buttonStyle: {
    float: 'right',
    paddingLeft: '10px'
  },
  inputStyle: {
    float: 'right'
  },
  smallButton: {
    width: '150px'
  }
}

function Header (props) {
  return (
    <nav className='navbar navbar-default navbar-fixed-top' style={styles.navbarDefault}>
      <div className='container-fluid' style={styles.navbar}>
        <Link to='/'>
          <div className='navbar-header' style={styles.header}>
            Weather
          </div>
        </Link>
        <form onSubmit={props.onSubmitUser}>
          <div style={styles.buttonStyle}>
            <button
              className="btn btn-block btn-success navbar-btn"
              style={{width: '115px'}}
              type='submit'>
              Get Weather
            </button>
          </div>
          <div className='navbar-right navbar-form'> 
            <input
              className='form-control'
              style={styles.smallButton}
              placeholder='City, State'
              onChange={props.onUpdateUser}
              value={props.city}
              type='text' />
          </div>
        </form>
      </div>
    </nav>
  );
}

Header.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

module.exports = Header;



