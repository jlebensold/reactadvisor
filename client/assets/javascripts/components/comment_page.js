import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommentList from "./comment_list";
import CommentForm from './comment_form';
import * as CommentActions from '../comment_actions';
import { watch } from '../comment_actions';


class CommentPage extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    const { actions: { watch } } = this.props;
    this.interval = setInterval(watch, 1000, this.props.restaurantId);
  }

  componentDidUnMount() {
    clearInterval(this.interval);
  }

  render() {
    const { comments, actions, restaurantId } = this.props;

    return (<div className='columns column-6'>
              <CommentForm
                  addComment={actions.addComment}
                  isReplying={true}
                  parent_id={null}
                  restaurant_id={ restaurantId }
              />
              <CommentList actions={actions} comments={ comments } parent_id={null} />
            </div>
    );
  }
}

function mapStateToProps(state) {

  return ({
    comments: state.comments
  });
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(CommentActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentPage);
