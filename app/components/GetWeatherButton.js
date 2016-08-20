var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

var GetWeatherButton = React.createClass({
  propTypes: {
    class: PropTypes.string.isRequired
  },
  getDefaultProps: function () {
    return {
      class: 'btn btn-block btn-success'
    };
  },
  render: function () {
    return (
      <button
        className={this.props.class}
        style={styles.smallButton}
        type='submit'>
        Get Weather
      </button>

    );
  }
});

module.exports = GetWeatherButton;
