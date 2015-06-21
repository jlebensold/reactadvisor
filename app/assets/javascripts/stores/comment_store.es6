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
        case Constants.ADD_COMMENT:
          this.addComment(_.merge({id: this._comments.length}, payload.comment));
          break;

        default:
          // NO-OP
      }
    });

  }

  addComment(comment) {
    this._comments[comment.id] = comment;
    this.emitChange();
  }

  get comments() {
    return this._comments;
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
