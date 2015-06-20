// Constants
const Constants = {
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
var store = new Store();

console.info(`try running the following in the console:
    Actions.addComment({ id: store.comments.length , author: 'jl', body: 'foobar', rank: 5} );`);
