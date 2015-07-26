import Api from './api';
import {
  ADD_COMMENT,
  UPVOTE_COMMENT,
  SET_COMMENTS
} from './actionTypes'

export function upvoteComment(restaurantId, comment) {
  return dispatch => {
    Api.put(`/restaurants/${restaurantId}/comments/${comment.id}/upvote`).then( json => {
      dispatch({
        type: UPVOTE_COMMENT,
        comment: json
      });
    });
  }
}

export function addComment(restaurantId, params) {
  return dispatch => {
    Api.post(`/restaurants/${restaurantId}/comments`, { comment: params }).then(comment => {
      dispatch({
        type: ADD_COMMENT,
        comment: comment
      });
    });
  };
}

export function watch(restaurantId ) {
  return dispatch => {
    Api.get(`/restaurants/${restaurantId}/comments`).then( comments => {
      dispatch({
        type: SET_COMMENTS,
        comments: comments
      });
    });
  };
}
