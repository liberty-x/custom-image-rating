var React  = require('react');
var Chart  = require('./Chart.js');

var App = React.createClass({

  render: function () {

    var chartProps  = {
      image: this.props.image,
      maxRating: this.props.maxRating,
      rating: this.props.rating
    };

    return(
      <div>
        <Chart {...chartProps}/>
      </div>
    );
  }
});

module.exports = App;
