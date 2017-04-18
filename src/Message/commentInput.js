import React, { Component } from 'react'

class CommenInput extends Component {
  constructor () {
    super()
    this.state = {
        username: '',
        content: ''
    }
  }
  handleUsername (ev) {
      this.setState({
          username: ev.target.value
      })
  }
  handleContent (ev) {
      this.setState({
          content: ev.target.value
      })
  }
  handleSubmit (ev) {
      if (this.props.onSubmit) {
          const { username, content } = this.state
          this.props.onSubmit({username, content})
      }
      this.setState({content: ''})
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
            <span className="comment-field-name">用户名：</span>
            <div className="comment-field-input">
                <input value={this.state.username}
                onChange={this.handleUsername.bind(this)}/>
            </div>
        </div>
        <div className="comment-field">
            <span className="comment-field-name">评论内容：</span>
            <div className="comment-field-input">
                <textarea value={this.state.content}
                onChange={this.handleContent.bind(this)}/>
            </div>
        </div>
        <div className="comment-field-button">
            <button onClick={this.handleSubmit.bind(this)}>
                发布
            </button>
        </div>
      </div>
    )
  }
}

export default CommenInput