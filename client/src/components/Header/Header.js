import './Header.scss';
import logo from '../../assets/logo/golf-app-logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header className="header">
      <Link to="/" className="header__logo"><img className="header__logo" src={logo} alt="logo"/></Link>
    </header>
  )
}

export default Header;