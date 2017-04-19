import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommenInput extends Component {
  static propTypes = {
      onSubmit: PropTypes.func
  }
  constructor () {
    super()
    this.state = {
        username: '',
        content: '',
        createTime: ''
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
          this.props.onSubmit({username, content, createTime: +new Date()})
      }
      this.setState({content: ''})
  }
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }
  handleBlur (ev) {
    this._saveUsername(ev.target.value)
  }
  _loadUsername () {
      const username = localStorage.getItem('username')
      if (username) {
          this.setState({
              username
          })
      }
  }
  componentWillMount () {
    this._loadUsername()
  }
  componentDidMount () {
      this.textFocus.focus()
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
            <span className="comment-field-name">用户名：</span>
            <div className="comment-field-input">
                <input value={this.state.username}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleUsername.bind(this)}/>
            </div>
        </div>
        <div className="comment-field">
            <span className="comment-field-name">评论内容：</span>
            <div className="comment-field-input">
                <textarea value={this.state.content}
                ref={(textFocus) => { this.textFocus = textFocus }}
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