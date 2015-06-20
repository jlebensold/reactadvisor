var Comment = React.createClass({
  propTypes: {
    author: React.PropTypes.string,
    body: React.PropTypes.string,
    rank: React.PropTypes.node
  },

  render() {
    return (
      <div>
        <div>Author: {this.props.author}</div>
        <div>Body: {this.props.body}</div>
        <div>Rank: {this.props.rank}</div>
      </div>
    );
  }
});
