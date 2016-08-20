var React = require('react');
var HeaderContainer = require('../containers/HeaderContainer.js');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
})

module.exports = HelloWorld;
