import CommentSection from './components/comment_section';
import React from 'react';
window.renderCommentSection = function(id, props) {
  React.render(<CommentSection {...props} />, document.getElementById(id) );
};
