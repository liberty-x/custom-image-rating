'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var App         = require('./components/App.js');
var rootElement = document.body;
var devProps = {
  fieldName: "FAC Rating",
  image: "https://files.gitter.im/RachelBLondon/libert-x/vc9I/dan-sofer.png",
  maxRating: 5,
  rating: 4
};

require('../styles/main.js');

ReactDOM.render(
  <App {...devProps} />,
  rootElement
);
