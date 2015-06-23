'use strict';
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
      rank: React.PropTypes.number
    }
  }

  static get contextTypes() {
    return {
      actions: React.PropTypes.func.isRequired
    }
  }

  onUpvote(event) {
    console.log(this.context);
    this.context.actions.upvoteComment(this.props);
  }

  render() {
    return (
      <li className='comment row collapse'>
        <p>
          <strong>{this.props.rank}</strong>
          {this.props.body}
        </p>
        <a className='button' onClick={this.onUpvote.bind(this)}>+1</a>
        <p className='right'>by {this.props.author}</p>
        { this.props.hasChildren ? (<CommentList parent_id={this.props.id} />) : null }
        <CommentForm parent_id={this.props.id} />
      </li>
    );
  }
};

export default Comment;
