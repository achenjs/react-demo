import React, { Component } from 'react'
import wrapWithLoadData from './wrapWithLoadData'

class InputWithUserName extends Component {
  constructor () {
    super()
    this.state = {
      data: ''
    }
  }
  render () {
    return <input value={this.state.data} />
  }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')

class Index extends Component {
  render () {
    return (
      <div>
        <InputWithUserName />
      </div>
    )
  }
}

export default Index
