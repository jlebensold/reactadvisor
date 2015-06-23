"use strict";
import Constants from './../constants';
import AppDispatcher from './../app_dispatcher';

class CommentStore extends EventEmitter {

  constructor() {
    super()
    this._comments = [];

    AppDispatcher.register(payload => {
      var action = payload.actionType;
      switch (action) {
        case Constants.SET_COMMENTS:
          _.each(payload.comments, c => {
            this.addComment(c);
          });
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

  addComment(comment) {
    this._comments[comment.id || this._comments.length] = comment;
  }

  getComments(parentId) {
    return _.select(this._comments, c => { return c && c.parent_id === parentId; });
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
