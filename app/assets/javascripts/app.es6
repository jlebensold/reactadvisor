// Constants
var Constants = {
  CHANGE_EVENT: 'change',
  ADD_COMMENT: 'comments.add'
}

// Actions
class Actions {
  static addComment(params) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    });
  }
}


// Store
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

var store = new Store();

// Dispatcher
var AppDispatcher = new FluxDispatcher();
AppDispatcher.register(payload => {
  var action = payload.actionType;

  switch (action) {
    case Constants.ADD_COMMENT:
      store.addComment(payload.comment);
      break;

    default:
      // NO-OP
  }
});


console.info(`try running the following in the console:
    Actions.addComment({ id: store.comments.length , author: 'jl', body: 'foobar', rank: 5} );`);
