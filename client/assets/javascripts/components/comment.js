'use strict';
import React from 'react';
import CommentList from "./comment_list";
import CommentForm from './comment_form';
class Comment extends React.Component {

  static get propTypes() {
    return {
      author: React.PropTypes.string,
      body: React.PropTypes.string,
      id: React.PropTypes.number,
      hasChildren: React.PropTypes.bool,
      parent_id: React.PropTypes.number,
      restaurant_id: React.PropTypes.number,
      rank: React.PropTypes.number
    }
  }

  constructor() {
    super();
    this.state = {isReplying: false };
  }

  onToggleReply(event) {
    event.preventDefault();
    this.setState({isReplying: !this.state.isReplying});
  }

  onUpvote(event) {
    this.props.actions.upvoteComment(this.props.restaurantId, this.props);
  }

  onCommentSubmitted(event) {
    this.setState({isReplying: false });
  }

  render() {
    const replyText = this.state.isReplying ? 'Hide' : 'Reply';
    return (
      <li className='comment row collapse'>
        <blockquote>
          {this.props.body}
          <cite>
          by {this.props.author}
          <span className='label secondary right'>{this.props.rank}</span>
          </cite>
        </blockquote>
        <button className='button tiny secondary' onClick={this.onToggleReply.bind(this)}>{replyText}</button>
        <button className='button tiny' onClick={this.onUpvote.bind(this)}>+1</button>
        <CommentForm
          onCommentSubmitted={this.onCommentSubmitted.bind(this)}
          addComment={this.props.actions.addComment}
          restaurant_id={this.props.restaurant_id}
          isReplying={this.state.isReplying}
          parent_id={this.props.id} />
        { this.props.hasChildren ?
          <CommentList {...this.props} parent_id={this.props.id} />
        : null }
      </li>
    );
  }
};

export default Comment;
