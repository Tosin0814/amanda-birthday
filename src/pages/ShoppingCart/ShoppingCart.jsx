// import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css'
// import { useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function ShoppingCart({user, updateUser}) {
  const loginRedirectEndpoint = 'shoppingCart'
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!user) {
  //     navigate('/login')
  //   }
  // },[])
  return (
    <div className="ShoppingCart">
    { !user ?
      <>
      <br /><br /><br /><br />
      <div className='formContainer'>
        <LoginForm updateUser={updateUser} redirectEndpoint={loginRedirectEndpoint} />
      </div>
      </>
      :
      <div>
        <br /><br />
        <h3>Shopping Cart</h3>
      </div>
    }
    </div>  
  );
}