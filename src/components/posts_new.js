import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'; // nearly identical to connect
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

  // React sees this and searches parents for somebody with router, here it will find it quite high
  static contextTypes = {
    router: PropTypes.object
  };
  // Never use context. Only for the router right here.

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post created, nav user to index
        // nav using this.context.router.push with the path to navigate to (home)
        this.context.router.push('/');
      });

  }

  render () {
    const { fields: {title, categories, content}, handleSubmit } = this.props; // annoying sugar
    //console.log(title);

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post. Test form validation by submitting with a blank field.</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ""}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ""}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <input type="text" className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ""}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>

      </form>
      );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter a category for your blog post';
  }
  if (!values.content) {
    errors.content = 'Enter your blog post';
  }

  return errors;
}
// if the errors object has a key that is truthy that matches our form,
// redux form assumes it is invalid

// how to merge connect and reduxForm? reduxForm literally is a connect
// connect: first arg is mapstate, 2nd is mapdispatch
//reduxForm: 1st is config, 2nd is mapState, 3rd is mapDispatch
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title','categories','content'],
  validate

}, null, { createPost })(PostsNew);
// again using shorthand to pass createPost as the action creator
// gives this.props.createPost
