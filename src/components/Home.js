import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';

const axios = require('axios');
const url = 'https://cinopsis.herokuapp.com/api/movies';

const Home = props => {
  const [allMovies, setAllMovies] = useState([]);

  //getting and setting all movies
  useEffect(() => {
    axios.get(url).then(res => setAllMovies(res.data));
  }, []);

  const getTopFive = genre => {
    const topFive = allMovies
      .filter(movie => movie.genre === genre)
      .sort((a, b) => (a.avgRating > b.avgRating ? -1 : 1));
    topFive.splice(5, topFive.length - 1);
    const bullets = topFive.map((movie, index) => {
      return (
        <Link key={index} to={'movie/' + movie._id}>
          <li>{movie.title}</li>
        </Link>
      );
    });
    if (bullets.length >= 5) {
      const ViewAll = addViewAll(genre);
      bullets.push(ViewAll);
    }
    return bullets;
  };
  const addViewAll = genre => {
    return (
      <Link key={genre} className="viewAll" to={`genre/${genre}`}>
        View All
      </Link>
    );
  };

  return (
    <>
      <main className="homeMain">
        <div className="homeList">
          <div className="comedy">
            <ul>
              <h3>Comedy</h3>
              {allMovies &&
                (getTopFive('Comedy').length ? (
                  getTopFive('Comedy')
                ) : (
                  <li>No Comedies At This Time</li>
                ))}
            </ul>
          </div>
          <div className="romance">
            <ul>
              <h3>Romance</h3>
              {allMovies &&
                (getTopFive('Romance').length ? (
                  getTopFive('Romance')
                ) : (
                  <li>No Romance At This Time</li>
                ))}
            </ul>
          </div>
          <div className="action">
            <ul>
              <h3>Action</h3>
              {allMovies &&
                (getTopFive('Action').length ? (
                  getTopFive('Action')
                ) : (
                  <li>No Actions At This Time</li>
                ))}
            </ul>
          </div>
          <div className="horror">
            <ul>
              <h3>Horror</h3>
              {allMovies &&
                (getTopFive('Horror').length ? (
                  getTopFive('Horror')
                ) : (
                  <li>No Horrors At This Time</li>
                ))}
            </ul>
          </div>
          <div className="drama">
            <ul>
              <h3>Drama</h3>
              {allMovies &&
                (getTopFive('Drama').length ? (
                  getTopFive('Drama')
                ) : (
                  <li>No Dramas At This Time</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="sideNote">
          <h2>Aside</h2>
        </div>
      </main>
    </>
  );
};

export default Home;
