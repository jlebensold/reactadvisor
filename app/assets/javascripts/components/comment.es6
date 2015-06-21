'use strict';
class Comment extends React.Component {
  static get propTypes() {
    return {
      author: React.PropTypes.string,
      body: React.PropTypes.string,
      rank: React.PropTypes.node
    }
  }

  render() {
    return (
      <div>
        <div>Author: {this.props.author}</div>
        <div>Body: {this.props.body}</div>
        <div>Rank: {this.props.rank}</div>
      </div>
    );
  }
};

export default Comment;
