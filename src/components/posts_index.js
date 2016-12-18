import React, { Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';
// Link manifests itself like an anchor tab, and is a hugely important
// feature of react router: plays nicely with the existing HTML

/*export default () => {
  return <div>List of blog posts</div>
};*/

class PostsIndex extends Component {
  componentWillMount() {
    //console.log('this would be a good time to call an action creaator');
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      //console.log("Render got called");
      return (
        // *** comments below swap with custom server ***
        // <li className="list-group-item" key={post.id}>
          // <Link to={"posts/" + post.id}>
        <li className="list-group-item" key={post._id}>
          <Link to={"posts/" + post._id}>

          <h3>{post.title}</h3>
          </Link>
          <p><strong>Category: </strong>
          {" " + post.categories}</p>

        </li>
        );
      })

  }

  render () {
    return (
      <div>
        <div >
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  };
}

// Replace this with the fetchPosts object in the connect call
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}*/

function mapStateToProps(state) {
  return { posts: state.posts.all };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
