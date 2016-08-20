var React = require('react');
var Header = require('../components/Header.js');
var weatherHelpers = require('../utils/weatherHelpers.js');

var HeaderContainer = React.createClass({
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
      <Header
        onSubmitUser = {this.handleSubmitUseer}
        onUpdateUser = {this.handleUpdateUser}
        city = {this.state.city} />
    );
  }
});

module.exports = HeaderContainer;
