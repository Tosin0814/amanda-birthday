import './OrderHistory.css'
import LoginForm from '../../components/LoginForm/LoginForm';

export default function OrderHistory({user, updateUser}) {
  const loginRedirectEndpoint = 'orders'

  return (
    <div className="OrderHistory">
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
        <h3>Order History</h3>
      </div>
    }
    </div>  
  );}
