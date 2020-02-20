import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import './HeaderContainer.css';

const HeaderContainer = props => {
  return (
    <div>
      <Navbar className="nav-bar">
        <img className="logo" src={logo} alt="logo" />
        <Container></Container>
        <Container>
          <div className="headRow"></div>
          <Link to="/">
            <h3 className="homeHead">Home </h3>
          </Link>
          {localStorage.id && (
            <Link to="/new">
              <h3 className="submitHead">Submit</h3>
            </Link>
          )}

          {!localStorage.id && (
            <Link to="/login">
              <h3 className="loginHead">Log in</h3>
            </Link>
          )}

          {localStorage.id && (
            <h3 className="hiHead">
              Hi,{' '}
              <Link to={`/user/${localStorage.id}`}>
                {localStorage.username}
              </Link>
              !
            </h3>
          )}
          {!localStorage.id && <div></div>}
          {localStorage.username && (
            <Button
              href="/moviesFrontend"
              onClick={() => {
                localStorage.clear();
              }}
              variant="warning"
            >
              Logout
            </Button>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderContainer;
