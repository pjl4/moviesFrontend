import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const axios = require('axios');

const Login = props => {
   const [credentials, setCredentials] = useState({});
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [username, setUsername] = useState('');
   const [error, setError] = useState('');

   const getInfoAndValidate = () => {
      const info = { email, password, userName: username };

      setCredentials(info);
      axios
         .post('https://cinopsis.herokuapp.com/api/user', info)
         .then(res => {
            if (res.data.error) {
               setError(res.data.error);
            } else {
               localStorage.setItem('id', res.data._id);
               localStorage.setItem('username', res.data.userName);
               props.history.push('/');
               window.location.reload();
            }
         })
         .catch(err => console.log(err));
   };

   return (
      <div>
         <Form className='login-form'>
            <Form.Group
               onChange={evt => setUsername(evt.target.value)}
               controlId='formBasicText'
            >
               <Form.Label>
                  <span>Username:</span>
               </Form.Label>
               <Form.Control type='text' placeholder='Choose a username' />
               <Form.Text className='text-muted'></Form.Text>
            </Form.Group>
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
                  <span>Password</span>
               </Form.Label>
               <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Button
               onClick={evt => {
                  evt.preventDefault();
                  getInfoAndValidate();
               }}
               variant='secondary'
               type='submit'
            >
               <span>SIGN UP</span>
            </Button>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
         </Form>
      </div>
   );
};

export default Login;
