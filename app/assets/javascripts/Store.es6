class Store extends EventEmitter {

  constructor() {
    super()
    this._comments = [];

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
