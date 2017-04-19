import React, { Component } from 'react'
import propTypes from 'prop-types'
import Comment from './comment'

class CommentList extends Component {
  static propTypes = {
    comments: propTypes.array,
    onDeleteComment: propTypes.func
  }
  static defaultProps = {
    comments: []
  }
  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    const comments = this.props.comments
    return (
      <div>
        {comments.map((comment, i) => 
          <Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this, i)}/>
        )}
      </div>
    )
  }
}

export default CommentList