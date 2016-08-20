var React = require('react');
var GetWeather = require('../components/GetWeather.js');
var weatherHelpers = require('../utils/weatherHelpers.js');

var GetWeatherContainer = React.createClass({
  contextTypes : {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      city: ''
    };
  },
  handleUpdateUser: function (e) {
    this.setState({
      city: e.target.value
    });
  },
  handleSubmitUseer: function (e) {
    e.preventDefault();
    var city = this.state.city;
    this.context.router.push({
      pathname: '/forecast/' + city,
      query: {
        city: city
      }
    });
  },
  render: function () {
    return (
      <GetWeather
        onSubmitUser = {this.handleSubmitUseer}
        onUpdateUser = {this.handleUpdateUser}
        city = {this.state.city} />
    );
  }
});

module.exports = GetWeatherContainer;
