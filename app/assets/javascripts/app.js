// Constants
var Constants = {
  CHANGE_EVENT: 'change',
  ADD_COMMENT: 'comments.add'
}

// Actions
var Actions = new _.extend({}, {

  addComment: function(params) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    });
  }

});


// Store
var Store = new _.extend({}, EventEmitter.prototype, {

  _comments: [],

  addComment: function(comment) {
    this._comments[comment.id] = comment;
    this.emitChange();
  },

  comments: function() {
    return this._comments;
  },

  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  emitChange:  function() {
    this.emit(Constants.CHANGE_EVENT);
  }
});


// Dispatcher
var AppDispatcher = new FluxDispatcher();
AppDispatcher.register(function(payload) {
  var action = payload.actionType;

  switch (action) {
    case Constants.ADD_COMMENT:
      Store.addComment(payload.comment);
      break;

    default:
      // NO-OP
  }
});


console.info('try running the following in the console: \n' +
"Actions.addComment({ id: Store.comments().length , author: 'jl', body: 'foobar', rank: 5} );");
