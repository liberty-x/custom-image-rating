'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var App         = require('./components/App.js');
var rootElement = document.body;
var devProps = {
  fieldName: "CSS",
  image: "http://www.heraldscotland.com/resources/images/4068484/",
  maxRating: 10,
  rating: 7
};

require('../styles/main.js');

ReactDOM.render(
  <App {...devProps} />,
  rootElement
);
