import React from "react";

interface MovieInformation {
  poster: string;
  title: string;
  plot: string;
}

interface Movie {
  movie: MovieInformation;
}

const MovieCard = ({ movie }: Movie) => {
  return (
    <div className="w-1/3 text-white p-2">
      <img src={movie.poster} />
      <h1>{movie.title}</h1>
      <p>{movie.plot}</p>
    </div>
  );
};

export default MovieCard;
