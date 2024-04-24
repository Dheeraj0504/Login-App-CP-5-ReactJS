// Write your code here
import './index.css'

const Login = props => {
  // console.log(props)
  const {login} = props

  return (
    <button type="button" className="login-button" onClick={login}>
      Login
    </button>
  )
}

export default Login
