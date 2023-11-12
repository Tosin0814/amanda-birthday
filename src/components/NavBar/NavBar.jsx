import './NavBar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logOut } from '../../utilities/services/users';
export default function NavBar({ user, updateUser }) {
  const navigate = useNavigate()
  function handleLogOut(){
    logOut()
    updateUser(null)
    navigate('/')
  }

  return (
    <nav className='NavBar navbar navbar-expand-sm '>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Tee Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className='navbar-nav'>
            <NavLink className="nav-link"to={`/`}>Home</NavLink>       
            <NavLink className="nav-link" to="/orders">Orders</NavLink>
            <NavLink className="nav-link" to="/shoppingCart">Shopping Cart</NavLink>   
            { !user ?
            <>
              <NavLink className="nav-link" to='/login'>Login</NavLink>
            </>
            :
            <>
              <button className="nav-link" onClick={handleLogOut}>Log Out</button>
            </>
            }
          </div>
          <form className="d-flex search" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        
      </div>
    </nav>
  );
}