import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'

export default function Signup({updateUser}) {
  return (
    <div className='Signup'>
        <br /><br /><br />
        <div className='formContainer'>
            <h3 className='text-center'>Sign up</h3>
            <SignupForm updateUser={updateUser}/>
        </div>
    </div>
  )
}
