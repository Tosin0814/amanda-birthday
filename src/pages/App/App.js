import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

// Helpers
import { getUser } from '../../utilities/services/users';

import './App.css';
import Home from '../Home/Home';

export default function App() {
  const [user, setUser] = useState(getUser());

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
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/orders/new" element={<NewOrderPage user={user} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} />} />
            
            <Route path='/*' element={<Home user={user} />} />
          </Routes>
        </>
        // <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
