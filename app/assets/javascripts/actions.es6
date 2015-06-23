'use strict';
import AppDispatcher from './app_dispatcher';
import Constants from './constants';
import Api from './api';
class Actions {

  static watchInterval;


  static setComments(comments) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: comments
    });
  }

  static upvoteComment(comment) {
    Api.put('/restaurants/1/comments/' + comment.id + '/upvote').then( resp => {
      return resp.json();
    }).then( json => {
      console.log(json);
    });
    AppDispatcher.dispatch({
      actionType: Constants.UPVOTE_COMMENT,
      comment: comment
    });
  }

  static addComment(params) {
    //TODO: refactor the restaurant-id
    Api.post('/restaurants/1/comments', {
      comment: params
    }).then(resp => {
      return resp.json();
    }).then(comment => {
      AppDispatcher.dispatch({
        actionType: Constants.ADD_COMMENT,
        comment: comment
      });
    });
  }

  static startWatching() {
    Actions.watchInterval = setInterval(Actions.watch, 5000);
  }

  static watch() {
    Api.get('/restaurants/1/comments').then( resp => {
        return resp.json()
      }).then( comments => {
        Actions.setComments(comments);
      });
  }
}
export default Actions;
