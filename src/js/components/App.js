var React  = require('react');
var Chart  = require('./Chart.js');

var App = React.createClass({

  render: function () {

    var chartProps  = {
      fieldName: this.props.fieldName,
      image: this.props.image,
      maxRating: this.props.maxRating,
      rating: this.props.rating
    };

    return(
      <div className="appContainer">
        <Chart {...chartProps}/>
      </div>
    );
  }
});

module.exports = App;
