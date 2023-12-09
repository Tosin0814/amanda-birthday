import { useNavigate } from 'react-router-dom'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'
import { useEffect } from 'react'

export default function Signup({updateUser, user}) {
  const navigate = useNavigate()

  useEffect(() => {
    if (user._id) {
      navigate('/')
    }
  },[])
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
