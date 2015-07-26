import React from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Connector, Provider }  from 'react-redux';
import CommentPage from './comment_page';
import * as reducers from  '../reducers';

const reducer = combineReducers(reducers);

// create a store that has redux-thunk middleware enabled
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
