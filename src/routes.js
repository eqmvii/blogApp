// Define routes
import React from 'react';
import { Route, IndexRoute } from 'react-router';
// IndexRoute is for when the parent is matched directly

import App from './components/app.js';
import PostsIndex from './components/posts_index.js';
import PostsNew from './components/posts_new.js';
import PostsShow from './components/posts_show.js';


// forward slash route is the home, so like google.com/ is the / path of google
// Keep app as the root, which will allow strong architecture going forward
// IndexRoute is a helper for when parent and not children is hit
export default (
<Route path="/" component={App}>
  <IndexRoute component={PostsIndex} />
  <Route path = "posts/new" component={PostsNew} />
  <Route path = "/posts/:id" component={PostsShow} />
</Route>
);

// look for this.props.params.id for the parameter for the URL from React Router

// Nested routes - they won't render without a {this.props.children} ref in App
