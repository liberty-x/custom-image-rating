'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var App         = require('./components/App.js');
var rootElement = document.body;
var devProps = {
  fieldName: "FAC rating",
  image: "https://files.gitter.im/RachelBLondon/libert-x/vc9I/dan-sofer.png",
  //  star for when published
  // image: "https://files.gitter.im/RachelBLondon/libert-x/ogPz/star-icon-01.png",
  maxRating: 10,
  rating: 3
};

require('../styles/main.js');

ReactDOM.render(
  <App {...devProps} />,
  rootElement
);
