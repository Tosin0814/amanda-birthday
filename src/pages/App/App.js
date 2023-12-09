import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import Login from '../Login/Login';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import OrderHistory from '../OrderHistoryPage/OrderHistory';
import NavBar from '../../components/NavBar/NavBar';

// Helpers
import { getUser } from '../../utilities/services/users';

import './App.css';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';

export default function App() {
  const [user, setUser] = useState(getUser());

  // console.log(user)

  const updateUser = (user) => {
    setUser(user)
  }

  return (
    <main className="App">
      {/* { user ?
          <>
          <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      } */}
      {
        <>
          <NavBar user={user} updateUser={updateUser} />
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/shoppingCart" element={<ShoppingCart user={user} />} />
            <Route path="/orders" element={<OrderHistory user={user} />} />
            <Route path="/login" element={<Login updateUser={updateUser} user={user} />} />
            <Route path="/signup" element={<Signup updateUser={updateUser} user={user} />} />

            <Route path='/*' element={<Home user={user} />} />
          </Routes>
        </>
        
      }
    </main>
  );
}
