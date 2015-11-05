var React = require('react');

var Chart = React.createClass({

  render: function () {

    var fieldName = this.props.fieldName;
    var image     = this.props.image;
    var maxRating = this.props.maxRating;
    var rating    = this.props.rating;

    var arr = [];
    for (i=0; i<maxRating; i++){
      arr[i] = 'hi';
    };
    var printImages = arr.map(function(el,i){
      return (
              <div>
                <img key={'image'+i} className="imageTag"src={image}></img>
              </div>
      );
    });

    return (
      <div className="chartContainer">
        <p>Hello chart</p>
        <p>{fieldName}</p>
        <img className="imageTag"src={image}></img>
        <p>{maxRating}</p>
        <p>{rating}</p>
        {printImages}
      </div>
    )
  }
});

module.exports = Chart;
