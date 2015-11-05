var React  = require('react');
var Chart  = require('./Chart.js');

var App = React.createClass({

  getInitialState: function () {
    return {
      fieldName: "HTML",
      image: "http://pngimg.com/upload/star_PNG1580.png",
      maxRating: 5,
      rating: 3
    }
  },

  render: function () {

    var chartProps  = {
      fieldName: this.state.HTML,
      image: this.state.image,
      maxRating: this.state.maxRating,
      rating: this.state.rating
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
