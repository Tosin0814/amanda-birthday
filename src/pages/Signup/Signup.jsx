import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './Signup.css'

export default function Signup({setUser}) {
  return (
    <div>
        <SignUpForm setUser={setUser}/>
    </div>
  )
}
