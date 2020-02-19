import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const HeaderContainer = props => {
  return (
    <div>
      <nav className="nav-bar">
        <h3>cinopsis</h3>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        {localStorage.id && (
          <Link to="/new">
            <h3>Submit</h3>
          </Link>
        )}
        {!localStorage.id && (
          <Link to="/login">
            <h3>Log in</h3>
          </Link>
        )}
        {localStorage.username && (
          <div className="headerButton">
            <p>Signed in as: {localStorage.username}</p>
            <Button
              href="/moviesFrontend"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default HeaderContainer;
