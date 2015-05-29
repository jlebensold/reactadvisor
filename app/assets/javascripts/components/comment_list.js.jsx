var CommentList = React.createClass({

  getInitialState: function() {
    return this.getState();
  },

  getState: function() {
    return {
      comments: Store.comments()
    }
  },

  _onChange: function() {
    this.setState(this.getState());
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
        {this.state.comments.map(function(comment) {
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
