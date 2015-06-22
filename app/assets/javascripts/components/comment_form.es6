'use strict';
import Actions from '../actions';
class CommentForm extends React.Component {

  constructor() {
    super()
    this.state = { body: '', author: ''};
  }

  onFieldChange(event) {
    let prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop);
  }

  submitComment(event) {
    event.preventDefault();
    Actions.addComment(this.state);
  }

  render() {
    return <form>
        <label>Author</label>
        <input type="text" name="author" value={this.state.author} onChange={this.onFieldChange.bind(this)} />
        <label>Comment</label>
        <textarea name="body" value={this.state.body} onChange={this.onFieldChange.bind(this)} />
        <button type="submit" onClick={this.submitComment.bind(this)} >Submit</button>
      </form>
  }

}
export default CommentForm;
