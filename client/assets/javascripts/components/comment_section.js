import React from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider }  from 'react-redux';
import CommentPage from './comment_page';
import * as reducers from  '../reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


class CommentSection extends React.Component {
  constructor(props) {
    super();
    this.restaurantId = props.restaurant_id;
    this.comments = JSON.parse(props.comments);
  }

  render() {
    const store = createStoreWithMiddleware(reducer, { comments: this.comments } );
    return <Provider store={store}>
      { () => <CommentPage restaurantId={this.restaurantId} /> }
    </Provider>
  }

}
export default CommentSection;
