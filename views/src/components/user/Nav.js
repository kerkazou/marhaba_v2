import Logo from './logo.png';
import axios from '../../axios';

function Nav() {
  function logout () {
    axios.apiLogout();
  }
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" className="w-25"></img>
        </a>
        <div className='d-flex gap-3'>
          <a href="/resetpassword" className="border-0 fw-bold h5 bg-light">Reset Password</a>
          <form onSubmit={logout} >
            <button type="submit" className="border-0 fw-bold h5 bg-light">Logout</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;