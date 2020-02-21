import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const axios = require('axios');

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const getInfoAndValidate = () => {
    //Holds the user input generated from the form for user authentication via API axios call
    const info = { email, password };

    axios
      .post('https://cinopsis.herokuapp.com/api/user/login', info)
      .then(res => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          //set localStorage with property id and username in order to verify if user is logged in and for user-specific functionality
          localStorage.setItem('id', res.data._id);
          localStorage.setItem('username', res.data.userName);
          //On login, user is directed back to the homepage
          props.history.push('/');
          window.location.reload();
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Form className="login-form">
        <Form.Group
          onChange={evt => setEmail(evt.target.value)}
          controlId="formBasicEmail"
        >
          <Form.Label>
            <span>Email:</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group
          onChange={evt => setPassword(evt.target.value)}
          controlId="formBasicPassword"
        >
          <Form.Label>
            <span>Password:</span>
          </Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <div className="loginButtons">
          <Button
            onClick={evt => {
              evt.preventDefault();
              getInfoAndValidate();
            }}
            variant="warning"
            type="submit"
          >
            LOGIN
          </Button>
          <Link to="/signup">
            <Button className="signButton" variant="secondary">
              SIGN UP
            </Button>
          </Link>

          {error && <h3 style={{ color: 'red' }}>{error}</h3>}
        </div>
      </Form>
    </div>
  );
};

export default Login;
