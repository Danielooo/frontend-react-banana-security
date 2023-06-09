import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";


function NavBar() {
  const { isAuth, login, logout } = useContext(AuthContext);
  const history = useHistory();


  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          <h2>

          </h2>
          </span>
        </Link>

      <div>
        {!isAuth ?
          <>
            <button
              type="button"
              onClick={() => history.push('/signin')}
            >
              Log in
            </button>

            <button
              type="button"
              onClick={() => history.push('/signup')}
            >
              Registreren
            </button>
          </>
          :
          <>
            <button
              type="button"
              onClick={logout}
            >
              Log out
            </button>
          </>
        }

      </div>
    </nav>
  );
}

export default NavBar;
