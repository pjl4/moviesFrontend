import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
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
            // conditionally render a link to the submit component if user is logged in by using the localStorage
            <Link to="/new">
              <h3 className="submitHead">Submit</h3>
            </Link>
          )}

          {!localStorage.id && (
            //conditionally render a link to login component if user is not logged in
            <Link to="/login">
              <h3 className="loginHead">Log in</h3>
            </Link>
          )}

          {localStorage.id && (
            //conditionally render a link to the user component by checking that user is logged in and grabbing the username from the localstorage data
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
            //Clear the localStorage on logout
            <Button
              href="/moviesFrontend"
              onClick={() => {
                localStorage.clear();
              }}
              variant="warning"
            >
              <span className="logout">LOGOUT</span>
            </Button>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderContainer;
