import './Header.css';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}

export default Header;
