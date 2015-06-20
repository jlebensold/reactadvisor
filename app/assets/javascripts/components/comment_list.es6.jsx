var CommentList = React.createClass({

  _onChange() {
    this.forceUpdate();
  },

  componentDidMount() {
    store.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    store.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <div>
        {store.comments.map( comment => {
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


