import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/postActions";
import classnames from "classnames";
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(postId, newComment);
    this.setState({
      text: ""
    });
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({
        errors: newProps.errors
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="post-form mb-3">
        <div className="card card-light">
          <div className="card-header bg-light text-dark">
            Make a comment...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <textarea
                  name="text"
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    "is-invalid": errors.text
                  })}
                  placeholder="Reply to post"
                  style={{ resize: "none" }}
                  value={this.state.text}
                />
                <p className="errors">{errors.text}</p>
                <button type="submit" className="btn btn-view">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errros: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
