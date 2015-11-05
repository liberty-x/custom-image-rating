var React = require('react');

var Chart = React.createClass({

  render: function () {

    var fieldName = this.props.fieldName;
    var image     = this.props.image;
    var maxRating = this.props.maxRating;
    var rating    = this.props.rating;

    return (
      <div className="chart-container">
        <p>Hello chart</p>
        <p>{fieldName}</p>
        <img src={image}></img>
        <p>{maxRating}</p>
        <p>{rating}</p>
      </div>
    )
  }
});

module.exports = Chart;
