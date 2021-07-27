import React from "react";
import Photo from "./photo";
import Comments from "./Comments";

const Single = React.createClass({
  render() {
    const postId = this.props.params.postId;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments
          postComments={postComments}
          postId={this.props.params.postId}
          {...this.props}
        />
      </div>
    );
  },
});

export default Single;
