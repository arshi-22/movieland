import { useEffect, useState } from "react";
import { URL, defaultMovie } from "../../constants";
import "./style.css";
import searchIcon from "../../icons/search-icon.png";

const MovieCard = () => {
  const [movies, setMovies] = useState([{}]);
  const [searchMovie, setSearchMovie] = useState("");

  const searchMovies = (event) => {
    setSearchMovie(event.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch(
      `${URL.API_URL}?${URL.API_KEY}${URL.API_KEY_VALUE}&s=${searchMovie}`
    );
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    const searchMovies = async (title) => {
      const response = await fetch(
        `${URL.API_URL}?${URL.API_KEY}${URL.API_KEY_VALUE}&s=${title}`
      );
      const data = await response.json();
 
      if (data.Error) {
        setMovies([]);
      } else {
        setMovies(data.Search);
      }
    };

    searchMovies(defaultMovie);
  }, []);

  return (
    <div className="root">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchMovie}
          onChange={searchMovies}
          className="searchBar"
        />
        <img
          src={searchIcon}
          alt="search"
          className="searchIcon"
          onClick={handleSearch}
        />
      </div>

      <div className="cards">
        {movies.map((movie) => (
          <div className="movieCard" key={movie.imdbID}>
            <p>{movie?.Year}</p>
            <img
              className="moviePoster"
              src={movie.Poster}
              alt="movie poster"
            />
            <div className="movie-details">
              <h3>{movie.Genre}</h3>
              <h4>{movie.Title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieCard;
