import React, { Component } from 'react'
import CommentInput from './commentInput'
import CommentList from './commentList'
import './index.css'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }
  componentWillMount () {
    this._loadComments()
  }
  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({
        comments
      })
    }
  }
  _savaComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  hanldeSubmit (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名！')
    if (!comment.content) return alert('请输入评论内容！')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
    this._savaComments(this.state.comments)
  }
  handleDeleteComment (index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({
      comments
    })
    this._savaComments(comments)
  }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput 
        onSubmit={this.hanldeSubmit.bind(this)}/>
        <CommentList
        comments={this.state.comments}
        onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
    )
  }
}

export default Main
