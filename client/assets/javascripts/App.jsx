import CommentSection from './components/comment_section';
import $ from 'jquery';
import React from 'react';
window.CommentSection = function(id, props) {
  React.render(
    <CommentSection {...props} />,
    document.getElementById(id)
  );
};
