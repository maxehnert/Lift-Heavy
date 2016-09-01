import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="row container">
        <h2>Login or Signup</h2>
        <Link to="/workout">
          <button type="submit" className="btn btn-default">My Workout</button>
        </Link>
        <Link to="/previous-workout">
          <button type="submit" className="btn btn-default">Previous Workouts</button>
        </Link>
        <Link to="/stats">
          <button type="submit" className="btn btn-default">My Stats</button>
        </Link>
      </div>
    )
  }
}

export default Home
