import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-outer">
      <div className="nav-container">
        <div className="nav-left">
          <img src="/logo.png" alt="Haven Ark logo" className="nav-logo" />
          <span className="brand">HAVEN ARK</span>
        </div>
        <div className="nav-center">
          <a href="#" className="center-link">MASTERCLASS</a>
        </div>
        <div className="nav-right">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/signup" className="btn btn-signup">SignUp</Link>
        </div>
      </div>
    </nav>
  );
}