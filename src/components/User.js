import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './User.css';
const axios = require('axios');

const User = props => {
  const [userData, setUserData] = useState();
  const url = `https://cinopsis.herokuapp.com/api/user/${props.match.match.params.id}`;
  useEffect(() => {
    axios.get(url).then(res => {
      setUserData(res.data);
    });
  }, [url]);

  return (
    <div className="userInfo">
      {userData && (
        <>
          <ul>
            <h2>{userData.user.userName}</h2>
            {userData.movies.map((movie, index) => {
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
