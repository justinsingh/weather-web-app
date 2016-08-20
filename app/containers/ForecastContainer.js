var React = require('react');
var Forecast = require('../components/Forecast.js');
var weatherHelpers = require('../utils/weatherHelpers.js');

var ForecastContainer = React.createClass({
  contextTypes : {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      cityInfo: [],
      fiveDayArrs: []
    };
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    weatherHelpers.getFiveDays(query.city)
                  .then(function (forecast) {
                    this.setState({
                      isLoading: false,
                      cityInfo: [forecast],
                      fiveDayArrs: [forecast.data.list[0], forecast.data.list[1], forecast.data.list[2], forecast.data.list[3]],
                      cityName: forecast.data.city.name + ', ' + forecast.data.city.country 
                    });
                    console.log(this.state.cityInfo);
                    console.log(this.state.fiveDayArrs);
                    console.log(this.state.cityName);
                  }.bind(this));
  },
  handleGetImage: function (arrayNum) {
    return (
      './app/images/' + this.state.fiveDayArrs[arrayNum].weather[0].icon + '.svg'
    );
  },
  handleClickImage: function (arrayNum) {
    this.context.router.push({
      pathname: '/detail/' + this.props.location.query.city,
      state: {
        detail: this.state.fiveDayArrs[arrayNum],
        id: arrayNum,
        locationName: this.state.cityName
      }
    });
  },
  render: function () {
    return (
      <Forecast
      isLoading = {this.state.isLoading}
      cityInfo = {this.state.cityInfo}
      fiveDayArrs = {this.state.fiveDayArrs}
      onGetImage = {this.handleGetImage}
      onClickImage = {this.handleClickImage}/>
    );
  }
});

module.exports = ForecastContainer;
