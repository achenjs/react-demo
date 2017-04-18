import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Demo1 from './Demo1/Demo1'
import Message from './Message/Message'
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render((
  <Router>
    <div>
      <div>
        <Link to="/Demo1">Demo1</Link>
        <Link to="/message">message</Link>
      </div>
      <Route path="/" component={App}/>
      <Route path="/Demo1" component={Demo1}/>
      <Route path="/Message" component={Message}/>
    </div>
  </Router>),
  document.getElementById('root')
);
