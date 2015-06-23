'use strict';
class CommentForm extends React.Component {

  static get contextTypes() {
    return {
      actions: React.PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super()
    this.defaultState = { body: '', author: '', rank: 0 };
    this.state = this.defaultState;
    this.state.isReplying = props.isReplying || false;
  }

  onFieldChange(event) {
    let prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop);
  }

  onReply(event) {
    event.preventDefault();
    this.setState({isReplying: true});
  }

  onSubmitComment(event) {
    event.preventDefault();
    this.context.actions.addComment(_.merge(this.state, {parent_id: this.props.parent_id}));
    this.setState(this.defaultState);
  }

  render() {
    return <div>
        <div className={ this.state.isReplying ? 'hide' : '' } >
          <a className='button secondary' onClick={this.onReply.bind(this)}> Reply</a>
        </div>
        <form className={ this.state.isReplying ? '' : 'hide' } >
          <label>Author</label>
          <input type="text" name="author" value={this.state.author} onChange={this.onFieldChange.bind(this)} />
          <label>Comment</label>
          <textarea name="body" value={this.state.body} onChange={this.onFieldChange.bind(this)} />
          <button type="submit" onClick={this.onSubmitComment.bind(this)} >Submit</button>
        </form>
      </div>
  }
}
export default CommentForm;
