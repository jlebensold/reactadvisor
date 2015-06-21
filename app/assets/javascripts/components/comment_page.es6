import CommentList from "./comment_list";
import Constants from "./../constants";

class CommentPage extends React.Component {
  static get childContextTypes() {
    return {
      commentStore: React.PropTypes.object.isRequired,
      actions: React.PropTypes.func.isRequired
    }
  };

  getChildContext() {
     return {
       commentStore: this.props.commentStore,
       actions: this.props.actions
     }
  }

  render() {
     return <CommentList />;
  }

}
export default CommentPage;
