import React, { Component } from 'react'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      content: '<h1>react</h1>',
      color: 'yellow'
    }
  }
  render () {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: this.state.content}}/> 
        <h1 style={{fontSize: '12px', color: this.state.color}}>React</h1>
      </div>
    )
  }
}

export default Index