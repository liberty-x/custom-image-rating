var React = require('react');

var Chart = React.createClass({

  render: function () {

    var fieldName = this.props.fieldName;
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
    console.log(arr);
    var printImages = arr.map(function(el,i,arr){
      return (
              <div className={el}>
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
