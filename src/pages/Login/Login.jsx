import './Login.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function Login({ updateUser, user }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  },[])
  return (
    <div className="Login">
      <br /><br /><br />
      <div className='formContainer'>
        <h3 className="text-center">Login</h3>
        <LoginForm updateUser={updateUser}/>
        <small className='signupContainer'>
          <span>
            Don't have an account?&nbsp;
          </span>
          <span>
            <Link to={`/signup`}>Create Account</Link>
          </span>
        </small>
      </div>
      
    </ div>
  );
}