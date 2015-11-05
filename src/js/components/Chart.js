var React = require('react');

var Chart = React.createClass({

  render: function () {

    var fieldName = this.props.fieldName;
    var image     = this.props.image;
    var maxRating = this.props.maxRating;
    var rating    = this.props.rating;

    var arr = [];
    for (i=0; i<rating; i++){
      arr[i] = '';
    };
    var printImages = arr.map(function(el,i){
      return (
              <div className="imageDiv">
                <img key={'image'+i} className="imageTag"src={image}></img>
              </div>
      );
    });

    return (
      <div className="chartContainer">
        <div className="imageBar">
        {printImages}
        </div>

      </div>
    )
  }
});

module.exports = Chart;
