var React = require('react');
import CommentSection from './components/comment_section';
var renderToString = function(component, props, callback) {
  callback(React.renderToString(<CommentSection {...props} />));
}
module.exports = renderToString;
