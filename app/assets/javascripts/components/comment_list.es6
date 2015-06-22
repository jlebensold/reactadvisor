import Comment from './comment';
import CommentForm from './comment_form';
class CommentList extends React.Component {

  static get contextTypes() {
    return {
    commentStore: React.PropTypes.object.isRequired
    }
  }

  _onChange() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.context.commentStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    this.context.commentStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <div>
        <CommentForm  />
        {this.context.commentStore.comments.map( comment => {
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

export default CommentList;
