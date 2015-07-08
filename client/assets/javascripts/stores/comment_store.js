import Constants from '../constants';
import AppDispatcher from '../app_dispatcher';
import { EventEmitter } from 'events';
import _ from 'lodash';
class CommentStore extends EventEmitter {

  constructor() {
    super()
    this._comments = [];

    AppDispatcher.register(payload => {
      var action = payload.actionType;
      switch (action) {
        case Constants.UPVOTE_COMMENT:
          this.upvote(payload.comment);
          this.emitChange();
        case Constants.SET_COMMENTS:
          this.setComments(payload.comments);
          this.emitChange();
          break;
        case Constants.ADD_COMMENT:
          this.addComment(payload.comment);
          this.emitChange();
          break;

        default:
          // NO-OP
      }
    });

  }

  upvote(comment) {
    this._comments[comment.id].rank++;
  }

  setComments(comments) {
    _.each(comments, c => {
      this.addComment(c);
    });
  }

  hasChildren(comment) {
    return _.any(this._comments, c => { return c && c.parent_id === comment.id; });
  }

  addComment(comment) {
    this._comments[comment.id || this._comments.length] = comment;
  }

  getComments(parentId) {
    return _.chain(this._comments)
      .select(c => { return c && c.parent_id === parentId; })
      .sortBy('rank')
      .reverse()
      .value();
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }
};

export default CommentStore;
