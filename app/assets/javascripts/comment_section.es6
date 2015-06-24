'use strict';
import CommentStore from "./stores/comment_store";
import CommentPage from "components/comment_page";
import Actions from "actions";

window.CommentSection = class CommentSection extends React.Component {
  constructor(props) {
    super();
    this.actions = new Actions(props.restaurant_id);
    this.store = new CommentStore();
    this.actions.setComments(JSON.parse(props.comments));
    this.restaurantId = props.restaurant_id;
  }

  render() {
    return <CommentPage actions={this.actions} commentStore={this.store} />;
  }
};
