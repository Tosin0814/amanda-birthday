// Compoenents
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

export default function Login({ updateUser }) {
  return (
    <section>
      <h1>Login</h1>
      <LoginForm updateUser={updateUser}/>
      <small>
        <span>
          Don't have an account? 
        </span>
        <span>
          <Link to={`/signup`}>Create Account</Link>
        </span>
      </small>
    </section>
  );
}