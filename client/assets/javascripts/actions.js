import AppDispatcher from './app_dispatcher';
import Constants from './constants';
import Api from './api';
import Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
class Actions {
  constructor(restaurantId) {
    this.restaurantId = restaurantId;
    this.watchInterval = setInterval(this.watch.bind(this), 1000);
  }

  setComments(comments) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: comments
    });
  }

  upvoteComment(comment) {
    Api.put(`/restaurants/${this.restaurantId}/comments/${comment.id}/upvote`).then( json => {
      AppDispatcher.dispatch({
        actionType: Constants.UPVOTE_COMMENT,
        comment: json
      });
    });
  }

  addComment(params) {
    Api.post(`/restaurants/${this.restaurantId}/comments`, { comment: params }).then(comment => {
      AppDispatcher.dispatch({
        actionType: Constants.ADD_COMMENT,
        comment: comment
      });
    });
  }

  watch() {
    try {
      fetch
    } catch(ex) { return; }
    Api.get(`/restaurants/${this.restaurantId}/comments`).then( comments => {
      this.setComments(comments);
    });
  }
}
export default Actions;
