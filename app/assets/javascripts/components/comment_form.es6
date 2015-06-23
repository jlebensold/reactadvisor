'use strict';
class CommentForm extends React.Component {

  static get contextTypes() {
    return {
      actions: React.PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super()
    this.defaultState = { body: '', author: ''};
    this.state = this.defaultState;
    this.state.isReplying = props.isReplying || false;
  }

  onFieldChange(event) {
    let prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop);
  }

  onReply() {
    this.setState({isReplying: true});
  }

  submitComment(event) {
    event.preventDefault();
    this.context.actions.addComment(_.merge(this.state, {parent_id: this.props.parent_id}));
    this.setState(this.defaultState);
  }

  render() {
    return <div>
        <div className={ this.state.isReplying ? 'hide' : '' } >
          <a href="#" onClick={this.onReply.bind(this)}> Reply</a>
        </div>
        <form className={ this.state.isReplying ? '' : 'hide' } >
          <label>Author</label>
          <input type="text" name="author" value={this.state.author} onChange={this.onFieldChange.bind(this)} />
          <label>Comment</label>
          <textarea name="body" value={this.state.body} onChange={this.onFieldChange.bind(this)} />
          <button type="submit" onClick={this.submitComment.bind(this)} >Submit</button>
        </form>
      </div>
  }

}
export default CommentForm;
