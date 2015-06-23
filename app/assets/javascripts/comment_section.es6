'use strict';
import CommentStore from "./stores/comment_store";
import CommentPage from "components/comment_page";

// Actions
import Actions from "actions";
window.Actions = Actions;
console.info(`try running the following in the console:
    Actions.addComment({ author: 'jl', body: 'foobar', rank: 5} );`);

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
