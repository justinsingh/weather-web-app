var React = require('react');

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var now = new Date();

var helpers = {
  getDay: function (props) {
    return (
      days[now.getDay() + props]
    );
  },
  getDate: function (props) {
    return (
      now.getDate() + props
    );
  },
  getMonth: function () {
    return (
      months[now.getMonth()]
    );
  }
};

module.exports = helpers; 
