import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import CommentList from "./comment_list";
import CommentForm from './comment_form';
import * as CommentActions from '../comment_actions';
class CommentPage extends Component {

  render() {
    return (
      <Connector select={state => ({ restaurant_id: this.props.restaurantId, comments: state.comments })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ restaurantId, comments, restaurant_id, dispatch }) {
    const actions = bindActionCreators(CommentActions, dispatch);
    return <div className='columns column-6'>
      <CommentForm restaurant_id={ restaurant_id } addComment={actions.addComment} isReplying={true} parent_id={null} />
      <CommentList comments={ comments } actions={ actions } parent_id={null} />
    </div>
  }

}
export default CommentPage;
