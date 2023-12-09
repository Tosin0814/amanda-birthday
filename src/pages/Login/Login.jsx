import './Login.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function Login({ updateUser, user }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
    // eslint-disable-next-line
  },[])
  return (
    <div className="Login">
      <br /><br /><br />
      <div className='formContainer'>
        <LoginForm updateUser={updateUser}/>
      </div>
    </ div>
  );
}