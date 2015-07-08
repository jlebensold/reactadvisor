var React = require('react');
function toUnderscore (str){
  return str.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();}).slice(1);
}
var renderToString = function(component, props, callback) {
  component = require("./components/" + toUnderscore(component) )
  callback(React.renderToString(React.createElement(component, props)));
}
module.exports = renderToString;
