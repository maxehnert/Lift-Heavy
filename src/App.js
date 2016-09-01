import React, { Component } from 'react'
import { Link } from 'react-router'
import auth from './utils/auth'

import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {loggedIn: auth.loggedIn()}
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
  }

  componentDidMount() {
    auth.onChange = this.updateAuth.bind(this)
    auth.login()
  }

  render() {
    console.log('App', this.state);
    return (
      <div>
        <h1>Lift Heavy</h1>
        <ul role="nav">
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
              ) : (
                <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/" onlyActiveOnIndex>Home</Link></li>
          <li><Link to="/workout">Workout</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App
