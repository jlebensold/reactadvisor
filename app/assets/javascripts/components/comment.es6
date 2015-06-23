'use strict';
import CommentList from "./comment_list";
import CommentForm from './comment_form';
class Comment extends React.Component {

  static get contextTypes() {
    return {
      actions: React.PropTypes.object.isRequired
    }
  }

  static get propTypes() {
    return {
      author: React.PropTypes.string,
      body: React.PropTypes.string,
      id: React.PropTypes.number,
      hasChildren: React.PropTypes.bool,
      parent_id: React.PropTypes.number,
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
    this.context.actions.upvoteComment(this.props);
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
        <a className='button tiny secondary' onClick={this.onToggleReply.bind(this)}>{replyText}</a>
        <a className='button tiny' onClick={this.onUpvote.bind(this)}>+1</a>
        <CommentForm
          onCommentSubmitted={this.onCommentSubmitted.bind(this)}
          isReplying={this.state.isReplying}
          parent_id={this.props.id} />
        { this.props.hasChildren ?
          <CommentList parent_id={this.props.id} />
        : null }
      </li>
    );
  }
};

export default Comment;
