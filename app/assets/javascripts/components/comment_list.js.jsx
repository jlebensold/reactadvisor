var CommentList = React.createClass({

  _onChange: function() {
    this.forceUpdate();
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        {Store.comments().map(function(comment) {
          return (<Comment key={comment.id}
          body={comment.body}
          rank={comment.rank}
          author={comment.author}
        />)
        })}
      </div>
    );
  }
});
