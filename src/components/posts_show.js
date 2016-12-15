import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  // Never use context. Only for the router right here.


  componentWillMount () {
    this.props.fetchPost(this.props.params.id);
    //console.log(this.props.params.id);
  }

  onDeleteClick () {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render () {
    if (!this.props.post) {
      return <div></div>
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <br />
        <h3>{this.props.post.title}</h3>
        <h6>Categories: {this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
          <br />
          <button
              className="btn btn-danger pull-xs-right"
              onClick={this.onDeleteClick.bind(this)}
              >
            Delete Post
          </button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
