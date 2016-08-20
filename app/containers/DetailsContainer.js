var React = require('react');
var Details = require('../components/Details.js');

var DetailsContainer = React.createClass({
  getInitialState: function () {
    return {
      id: this.props.location.state.id,
      detail: this.props.location.state.detail,
      locationName: this.props.location.state.locationName
    }; 
  },
  componentDidMount: function () {
    console.log(this.state.id);
    console.log(this.state.detail);
    console.log(this.state.locationName);
  },
  handleGetImage: function () {
    return (
      './app/images/' + this.state.detail.weather[0].icon + '.svg'
    );
  },
  convertTemp: function (kelvins) {
    return (
      Math.round(kelvins * 1.8 - 459.67)
    );
  },
  render: function () {
    var min = this.convertTemp(this.state.detail.temp.min);
    var max = this.convertTemp(this.state.detail.temp.max);
    return (
      <Details
        onGetImage = {this.handleGetImage()}
        id = {this.state.id}
        locationName= {this.state.locationName}
        description = {this.state.detail.weather[0].description}
        humidity = {this.state.detail.humidity}
        min = {min}
        max = {max}/>
    );
  }
});

module.exports = DetailsContainer;
