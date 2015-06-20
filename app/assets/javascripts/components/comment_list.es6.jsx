class CommentList extends React.Component {

  static get contextTypes() { return {
    store: React.PropTypes.object.isRequired
  }}

  _onChange() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.context.store.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    this.context.store.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <div>
        {this.context.store.comments.map( comment => {
          return (<Comment key={comment.id}
          body={comment.body}
          rank={comment.rank}
          author={comment.author}
        />)
        })}
      </div>
    );
  }
}

class CommentPage extends React.Component {
  static get childContextTypes(){ return {
    store: React.PropTypes.object.isRequired
    }
  };

  constructor() {
    super()
  }


  getChildContext() {
     return {store: this.props.store}
  }

  render() {
     return <CommentList />;
  }

}
class App extends React.Component {

  render() {
    return <CommentPage store={store} />;
  }
};
