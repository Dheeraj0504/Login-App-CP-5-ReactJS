// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    // console.log("Loggedin")
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    // console.log(isLoggedIn)
    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn} />
          {/* ---Using Ternary Operators ---*/}
          {isLoggedIn ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
