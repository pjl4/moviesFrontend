import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './User.css';
const axios = require('axios');

const User = props => {
  const [userData, setUserData] = useState();
  //match the user id with the Api user id using routerProps, and pass via url to api get call
  const url = `https://cinopsis.herokuapp.com/api/user/${props.match.match.params.id}`;
  useEffect(() => {
    axios.get(url).then(res => {
      //set the specific user data
      setUserData(res.data);
    });

    return function cleanup() {
      setUserData();
    };
  }, [url]);

  return (
    <div className="userInfo">
      {userData && (
        <>
          <ul>
            <h2>{userData.user.userName}</h2>
            {userData.movies.map((movie, index) => {
              //map through user data movies in order to link to the individual movies
              return (
                <li key={index}>
                  <Link to={`/movie/${movie._id}`}> {movie.title}</Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default User;
