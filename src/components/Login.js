import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const axios = require('axios');

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const getInfoAndValidate = () => {
		const info = { email, password };

		axios
			.post('https://cinopsis.herokuapp.com/api/user/login', info)
			.then((res) => {
				if (res.data.error) {
					setError(res.data.error);
				} else {
					localStorage.setItem('id', res.data._id);
					localStorage.setItem('username', res.data.userName);
					props.history.push('/');
					window.location.reload();
				}
			})
			.catch((err) => console.log(err));

		
	};

	return (
      <div>
         <Form className='login-form'>
            <Form.Group
               onChange={evt => setEmail(evt.target.value)}
               controlId='formBasicEmail'
            >
               <Form.Label>
                  <span>Email:</span>
               </Form.Label>
               <Form.Control type='email' placeholder='Enter email' />
               <Form.Text className='text-muted'></Form.Text>
            </Form.Group>

            <Form.Group
               onChange={evt => setPassword(evt.target.value)}
               controlId='formBasicPassword'
            >
               <Form.Label>
                  <span>Password:</span>
               </Form.Label>
               <Form.Control type='password' placeholder='Enter password' />
            </Form.Group>
            <div className='loginButtons'>
               <Button
                  onClick={evt => {
                     evt.preventDefault();
                     getInfoAndValidate();
                  }}
                  variant='warning'
                  type='submit'
               >
                  LOGIN
               </Button>
               <a href='/signup'>
                  <Button
                     className='/moviesFrontend/signButton'
                     variant='secondary'
                  >
                     SIGN UP
                  </Button>
               </a>
               {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            </div>
         </Form>
      </div>
   );
};

export default Login;
