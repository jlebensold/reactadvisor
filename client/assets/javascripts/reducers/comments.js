import _ from 'lodash';
import {
  ADD_COMMENT,
  UPVOTE_COMMENT,
  SET_COMMENTS
} from '../actionTypes';

const initialState = [];

export default function comments(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments;

    case UPVOTE_COMMENT:
      return state.map(comment => {
            return comment.id === action.comment.id ?
            _.merge(comment, { rank: action.comment.rank }) :
            comment;
          });

    case ADD_COMMENT:
      return [_.merge({id: (action.comment.id || state.length)}, action.comment), ...state];

    default:
      return state;
  }

};
