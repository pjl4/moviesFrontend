import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';

const _ = require('lodash');

const axios = require('axios');

const Home = props => {
  const [allMovies, setAllMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState();

  //getting and setting all movies
  useEffect(() => {
    const url = 'https://cinopsis.herokuapp.com/api/movies';
    axios.get(url).then(res => {
      setRandomMovie(_.sample(res.data));
      setAllMovies(res.data);
    });
    //handles the reset of all variables  to their original state
    return function cleanup() {
      setAllMovies([]);
      setRandomMovie();
    };
  }, []);

  const getTopFive = genre => {
    //filter through allMovies variable to get top five movies based on genre and averageRating and stores to topFive variable
    const topFive = allMovies
      .filter(movie => movie.genre === genre)
      .sort((a, b) => (a.avgRating > b.avgRating ? -1 : 1));
    topFive.splice(5, topFive.length - 1);
    //map through topFive and creates a link to the url path for that individual movie
    const bullets = topFive.map((movie, index) => {
      return (
        <Link key={index} to={'movie/' + movie._id}>
          <li>{movie.title}</li>
        </Link>
      );
    });
    //Check to see if the length of bullets variable is equal to or greater than five
    if (bullets.length >= 5) {
      const ViewAll = addViewAll(genre);
      bullets.push(ViewAll);
    }
    return bullets;
  };

  const addViewAll = genre => {
    //renders a link to view all movies of a specific genre if bullets length is greater than 5
    return (
      <Link key={genre} className="viewAll" to={`genre/${genre}`}>
        View All
      </Link>
    );
  };

  return (
    <>
      <main className="homeMain">
        <div>
          <h1 className="topHead">Top Submissions</h1>
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
          <section className="ofTheDay">
            <h2 className="ofTheDayHead">Random Cinopsis:</h2>
            {randomMovie && (
              <div className="randomSyn">
                <h3>
                  <em>{randomMovie.title}</em>
                </h3>
                <span>{randomMovie.synopsis.substr(0, 250) + ' . . . '}</span>
                <span>
                  {
                    <Link
                      className="randomLink"
                      to={`/movie/${randomMovie._id}`}
                    >
                      READ MORE
                    </Link>
                  }
                </span>
              </div>
            )}
          </section>
        </div>
        <div className="sideNote">
          <h1 className="asideAbout">About</h1>
          <article>
            <p>
              Cinopsis is a community-driven website where anybody can write and
              submit their own film idea for feedback.
            </p>

            <p>
              To submit your work, please create an account. Once you finish, a
              submit button will appear on the navigation bar at the top of the
              screen. Each submission requires a title, synopsis, and genre, and
              will be eligible to receive user rating immediately after
              submission. Submissions can be deleted by their creator at will.
            </p>

            <p>
              Each user is allowed one rating, which they may edit at any time.
              The highest rated film ideas from each genre will appear on the
              home page above a link to view all movies from that genre. Each
              title will bring you to a page dedicated to that movie where you
              may submit your rating upon login. Please feel free to browse all
              works by a user by clicking on their username to visit their
              personal user page.{' '}
            </p>
          </article>
        </div>
      </main>
    </>
  );
};

export default Home;
