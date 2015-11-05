var React  = require('react');
var Chart  = require('./Chart.js');

var App = React.createClass({

  getInitialState: function () {
    return {
      fieldName: "HTML",
      image: "http://pngimg.com/upload/star_PNG1580.png",
      maxRating: 5,
      rating: 5
    }
  },

  render: function () {

    var chartProps  = {
      fieldName: this.props.fieldName,
      image: this.props.image,
      maxRating: this.props.maxRating,
      rating: this.props.rating
    };

    return(
      <div className="appContainer">
        <p>Hello App</p>
        <Chart {...chartProps}/>
      </div>
    );
  }
});

module.exports = App;
