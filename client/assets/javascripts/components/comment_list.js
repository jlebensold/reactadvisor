import Comment from './comment';
import _ from 'lodash';
import React from 'react';
import CommentForm from './comment_form';
class CommentList extends React.Component {

  static get propTypes() {
    return {
      comments: React.PropTypes.array.isRequired,
      restaurantId: React.PropTypes.number,
      parent_id: React.PropTypes.number
    }
  }

  commentsFiltered(comments, parentId) {
    return _.chain(comments)
      .select(c => { return c && c.parent_id === parentId; })
      .sortBy('rank')
      .reverse()
      .value();
  }

  hasChildren(comments, comment) {
    return _.any(comments, c => { return c && c.parent_id === comment.id; });
  }

  render() {
    const { comments, actions } = this.props;
    const filteredComments = this.commentsFiltered(comments, this.props.parent_id);

    return (
      <ul>
        {filteredComments.map( comment => {
          return (<Comment
          key={comment.id}
          hasChildren={this.hasChildren(comments, comment)}
          {...this.props}
          {...comment}
        />)
        })}
      </ul>
    );
  }
}

export default CommentList;
