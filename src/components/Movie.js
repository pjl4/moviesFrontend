import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Movie.css';
const axios = require('axios');
const Movie = props => {
   const url = `https://cinopsis.herokuapp.com/api/movies/${props.match.params.id}`;
   const [movieData, setMovieData] = useState();
   const [rating, setRating] = useState(0);
   const [usersRating, setUsersRating] = useState();
   const [loggedInBool, setloggedInBool] = useState();
   useEffect(() => {
      axios.get(url).then(res => {
         setMovieData(res.data);
         let temp = res.data.movie.ratings.find(
            rating => localStorage.id === rating.createdBy
         );
         let bool = localStorage.id && !usersRating;
         setloggedInBool(bool);
         setUsersRating(temp);

         return function cleanup() {
           temp = null;
           bool = null;
           setMovieData({});
           setRating(0);
           setUsersRating({});
           setloggedInBool(false);
           
         }
      });
      
   }, [movieData]);
   const postRating = () => {
      const ratingInfo = { rating, createdBy: localStorage.id };
      axios.post(url + '/rating', ratingInfo);
   };
   const deleteMovie = () => {
      axios.delete(url).then(res => props.history.push('/'));
   };
   const editRating = () => {
      const ratingInfo = { rating, createdBy: localStorage.id };
      axios.put(
         `https://cinopsis.herokuapp.com/api/rating/${usersRating._id}`,
         ratingInfo
      );
   };
   return (
      <div className='movieInfo'>
         {movieData && (
            <>
               <h2> {movieData.movie.title}</h2>
               <h6>
                  author:
                  <Link to={`/user/${movieData._id}`}>
                     {' '}
                     {movieData.userName}
                  </Link>
               </h6>
               <h6>
                  Average Rating:{' '}
                  {movieData.movie.ratings.length > 0 &&
                     Math.abs(movieData.movie.avgRating)}
                  {!movieData.movie.ratings.length > 0 && 'No ratings yet!'}
               </h6>
               <h6>Synopsis:</h6>
               <p>{movieData.movie.synopsis}</p>
               <Form>
                  {loggedInBool && (
                     <Form.Group controlId='exampleForm.ControlSelect1'>
                        <Form.Label>
                           <span>Rate Movie:</span>
                        </Form.Label>
                        <Form.Control
                           onChange={evt => setRating(evt.target.value)}
                           className='genre-submit'
                           as='select'
                        >
                           <option>0</option>
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                           <option>6</option>
                           <option>7</option>
                           <option>8</option>
                           <option>9</option>
                           <option>10</option>
                        </Form.Control>
                     </Form.Group>
                  )}
                  {usersRating && (
                     <div>
                        <span>You've already rated this film:</span>
                        <Form.Group controlId='exampleForm.ControlSelect1'>
                           <Form.Control
                              defaultValue={usersRating.rating}
                              onChange={evt => setRating(evt.target.value)}
                              className='genre-submit'
                              as='select'
                           >
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                           </Form.Control>
                           <Button
                              onClick={evt => {
                                 evt.preventDefault();
                                 editRating();
                              }}
                              variant='warning'
                              type='submit'
                           >
                              <span>EDIT RATING</span>
                           </Button>
                        </Form.Group>
                     </div>
                  )}
                  {loggedInBool && (
                     <Button
                        onClick={evt => {
                           evt.preventDefault();
                           postRating();
                        }}
                        variant='warning'
                        className='submitRating'
                        type='submit'
                     >
                        <span>SUBMIT RATING</span>
                     </Button>
                  )}
                  {!localStorage.id && (
                     <p className='notification'>Log in to rate this movie.</p>
                  )}
                  {localStorage.id === movieData.movie.createdBy && (
                     <Button
                        onClick={evt => {
                           evt.preventDefault();
                           deleteMovie();
                        }}
                        variant='danger'
                        type='submit'
                     >
                        <span>DELETE MOVIE</span>
                     </Button>
                  )}
               </Form>
            </>
         )}
      </div>
   );
};
export default Movie;
