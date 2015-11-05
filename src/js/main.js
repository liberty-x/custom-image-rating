'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var App         = require('./components/App.js');
var rootElement = document.body;
var devProps = {
  fieldName: "My culinary expertise",
  image: "http://pngimg.com/upload/small/dragon_PNG992.png",
  maxRating: 5,
  rating: 3
};

require('../styles/main.js');

ReactDOM.render(
  <App {...devProps} />,
  rootElement
);
