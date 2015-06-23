'use strict';
import CommentList from "./comment_list";
import CommentForm from './comment_form';

class CommentPage extends React.Component {
  static get childContextTypes() {
    return {
      commentStore: React.PropTypes.object.isRequired,
      actions: React.PropTypes.object.isRequired
    }
  };

  getChildContext() {
     return {
       commentStore: this.props.commentStore,
       actions: this.props.actions
     }
  }

  render() {
     return <div className='columns column-6'>
      <CommentForm isReplying={true} parent_id={null} />
      <CommentList parent_id={null} />
     </div>
  }

}
export default CommentPage;
