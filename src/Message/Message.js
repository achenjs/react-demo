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
  hanldeSubmit (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名！')
    if (!comment.content) return alert('请输入评论内容！')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput 
        onSubmit={this.hanldeSubmit.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default Main
