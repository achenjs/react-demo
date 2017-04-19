import React, { Component } from 'react'

class Deta extends Component {
  constructor () {
    super()
    this.state = {
      date: new Date()
    }
  }
  componentWillMount () {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

class AutoFocusInput extends Component {
  componentDidMount () {
    console.log(this.input)
    this.input.focus()
  }
  render () {
    return (
      <input ref={(input) => this.input = input}/>
    )
  }
}

class Card extends Component {
  componentWillMount () {
    console.log(this.props.children)
  }
  render () {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

class Index extends Component {
  constructor () {
    super()
    this.state = {
      isShowDate: true
    }
  }
  hanlderShowDate () {
    this.setState({
      isShowDate: !this.state.isShowDate
    })
  }
  componentDidMount () {
    console.log(this.Date)
  }
  render() {
    return (
      <div>
        {this.state.isShowDate ? <Deta ref={(Date) => this.Date = Date}/> : null }
        <button onClick={this.hanlderShowDate.bind(this)}>
          显示或隐藏时钟
        </button>
        <hr />
        <AutoFocusInput />
        <hr />
        <Card>
          <div>
            <h2>React</h2>
            订阅：<input />
          </div>
          <div>1111</div>
        </Card>
      </div>
    )
  }
}

export default Index