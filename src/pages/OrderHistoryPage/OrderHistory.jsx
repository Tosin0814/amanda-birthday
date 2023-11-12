import './OrderHistory.css'
import { checkToken } from "../../utilities/services/users";

export default function OrderHistory({}) {
  async function handleCheckToken(){
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (
    <div className="OrderHistory">
      <br /><br />
      <h3>OrderHistoryPage</h3>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );}
