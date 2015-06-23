import Comment from './comment';
import CommentForm from './comment_form';
class CommentList extends React.Component {

  static get propTypes() {
    return {
      parent_id: React.PropTypes.number
    }
  }

  static get contextTypes() {
    return {
    commentStore: React.PropTypes.object.isRequired
    }
  }

  componentDidMount() {
    this.context.commentStore.addChangeListener(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.context.commentStore.removeChangeListener(() => this.forceUpdate());
  }

  render() {
    return (
      <ul>
        {this.context.commentStore.getComments(this.props.parent_id).map( comment => {
          return (<Comment key={comment.id}
          body={comment.body}
          id={comment.id}
          rank={comment.rank}
          author={comment.author}
        />)
        })}
      </ul>
    );
  }
}

export default CommentList;
