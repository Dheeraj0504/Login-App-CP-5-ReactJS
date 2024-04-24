// Write your code here
import './index.css'

const Message = props => {
  console.log(props)
  const {isLoggedIn} = props
  /* ---Using Ternary Operators ---*/
  const message = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <h1 className="message">{message}</h1>
}
export default Message
