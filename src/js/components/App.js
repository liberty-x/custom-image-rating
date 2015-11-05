var React  = require('react');
var Chart  = require('./Chart.js');

var App = React.createClass({

  getInitialState: function () {
    return {
      items: []
    }
  },

  render: function () {

    var chartProps  = {
      items: this.state.items
    };

    return(
      <div className="app-container">
        <p>Hello App</p>
        <Chart {...chartProps}/>
      </div>
    );
  }
});

module.exports = App;
