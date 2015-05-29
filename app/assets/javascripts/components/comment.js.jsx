// rails generate react:component Comment author:string body:string rank:integer
var Comment = React.createClass({
  propTypes: {
    author: React.PropTypes.string,
    body: React.PropTypes.string,
    rank: React.PropTypes.node
  },

  render: function() {
    return (
      <div>
        <div>Author: {this.props.author}</div>
        <div>Body: {this.props.body}</div>
        <div>Rank: {this.props.rank}</div>
      </div>
    );
  }
});
