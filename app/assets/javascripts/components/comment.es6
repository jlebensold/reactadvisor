'use strict';
import CommentList from "./comment_list";
import CommentForm from './comment_form';
class Comment extends React.Component {
  static get propTypes() {
    return {
      author: React.PropTypes.string,
      body: React.PropTypes.string,
      id: React.PropTypes.number,
      parent_id: React.PropTypes.number,
      rank: React.PropTypes.node
    }
  }

  render() {
    return (
      <li className=''>
        <p>
          {this.props.body}
        </p>
        <p className='right'>by {this.props.author}</p>
        <CommentForm parent_id={this.props.id} />
        <CommentList parent_id={this.props.id} />
      </li>
    );
  }
};

export default Comment;
