import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class Title extends Component {
  handleClick(word, e) {
    console.log(this)
    console.log(word + ' ' + e.target.innerHTML)
  }

  render() {
    return (
      <h1 className="e" onClick={this.handleClick.bind(this, 'Hello')}>title</h1>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <Title />
      </header>
    )
  }
}

class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: false, name: 'Tomy' }
  }
  componentWillMount() {
    console.log('组件挂载之前！')
  }
  componentDidMount() {
    console.log('组件挂载之后！')
  }
  handleClick() {
    this.setState({
      isLiked: !this.state.isLiked
    })
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    const wordings = this.props.wordings || {
      likedText: '取消',
      unlikedText: '点赞'
    }
    return (
      <button onClick={this.handleClick.bind(this)}>
        { this.state.isLiked ? wordings.likedText : wordings.unlikedText }
        { this.state.name }
      </button>
    )
  }
}

class Users extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <div>姓名:{user.username}</div>
        <div>年龄:{user.age}</div>
        <div>性别:{user.gender}</div>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    const users = [
      { username: 'Jerry', age: 21, gender: 'male' },
      { username: 'Tomy', age: 22, gender: 'male' },
      { username: 'Lily', age: 19, gender: 'female' },
      { username: 'Lucy', age: 20, gender: 'female' }
    ]
    return (
      <div>
        <LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}}
        onClick={() => {
          console.log('Click on like button!!!')
        }}/>
        {users.map((user, i) => {
          return (
            <Users user={user} key={i} />
          )
        })}
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        footer
      </footer>
    )
  }
}

class Demo1 extends Component {
  renderGoodWord(goodWord, badWord) {
    const isGoodWord = false
    return isGoodWord ? goodWord : badWord
  }

  render() {
    const goodWord = <strong> is good</strong>
    const badWord = <span> is not good</span>
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
        </div>
        <p className="App-intro">
          { this.renderGoodWord(goodWord, badWord) }
        </p>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Demo1;
