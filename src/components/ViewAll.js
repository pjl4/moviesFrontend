import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ViewAll.css';

const axios = require('axios');
const ViewAll = props => {
  //use props to match the genre during get call to api for all movies of a specific genre
  const url = `https://cinopsis.herokuapp.com/api/movies/?genre=${props.match.params.genre}`;
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => setMovieList(res.data));
    return function cleanup() {
      setMovieList([]);
    };
  }, [url]);

  return (
    <div>
      <ul className="allMovies">
        <h2>{props.match.params.genre}</h2>
        {movieList.map(movie => {
          //map through movieList variable to render links for each movie pertaining to the provided genre
          return (
            <Link to={`/movie/${movie._id}`}>
              <li>{movie.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ViewAll;
