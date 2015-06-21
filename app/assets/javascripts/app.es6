'use strict';
import CommentStore from "./stores/comment_store";
import CommentPage from "components/comment_page";

// Actions
import Actions from "actions";
window.Actions = Actions;
console.info(`try running the following in the console:
    Actions.addComment({ author: 'jl', body: 'foobar', rank: 5} );`);

window.App = class App extends React.Component {
  render() {
    return <CommentPage actions={Actions} commentStore={new CommentStore()} />;
  }
};

