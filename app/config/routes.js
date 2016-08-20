var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main.js');
var Home = require('../components/Home.js');
var ForecastContainer = require('../containers/ForecastContainer.js');
var DetailsContainer = require('../containers/DetailsContainer.js');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} /> 
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='detail/:city' component={DetailsContainer} />
    </Route>
  </Router>
);

module.exports = routes;
