var React = require('react');

var Chart = React.createClass({

  render: function () {

    var image     = this.props.image;
    var maxRating = this.props.maxRating;
    var rating    = this.props.rating;

    var arr = [];
    for (i=0; i<maxRating; i++){
      if (i < rating) {
        arr[i] = 'imageDiv';
      } else {
        arr[i] = 'shadedImageDiv';
      }
    };
    var printImages = arr.map(function(el,i){
      return (
              <div className={el}>
                <img key={'image'+i} className="imageTag"src={image}></img>
              </div>
      );
    });

    return (
        <div className="imageBar">
        {printImages}
        </div>
    )
  }
});

module.exports = Chart;
