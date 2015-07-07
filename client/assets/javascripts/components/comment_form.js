import React from 'react';
class CommentForm extends React.Component {

  static get contextTypes() {
    return {
      actions: React.PropTypes.object.isRequired
    }
  }

  static get propTypes() {
    return {
      isReplying: React.PropTypes.bool,
      onCommentSubmitted: React.PropTypes.func,
      parent_id: React.PropTypes.number
    }
  }

  constructor(props) {
    super()
    this.defaultState = { body: '', author: '', rank: 0 };
    this.state = this.defaultState;
  }

  onFieldChange(event) {
    let prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop);
  }

  onSubmitComment(event) {
    event.preventDefault();
    this.context.actions.addComment(_.merge(this.state, {parent_id: this.props.parent_id}));
    this.setState(this.defaultState);
    if (this.props.onCommentSubmitted) {
      this.props.onCommentSubmitted();
    }
  }

  render() {
    return <div>
        <form className={ this.props.isReplying ? 'row' : 'row hide' } >
          <label>Author</label>
          <input type="text" name="author" value={this.state.author} onChange={this.onFieldChange.bind(this)} />
          <label>Comment</label>
          <textarea name="body" value={this.state.body} onChange={this.onFieldChange.bind(this)} />
          <button className='button right tiny' type="submit" onClick={this.onSubmitComment.bind(this)} >Submit</button>
        </form>
      </div>
  }
}
export default CommentForm;
