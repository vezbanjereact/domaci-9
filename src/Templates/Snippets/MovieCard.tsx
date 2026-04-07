import React from "react";

const MovieCard = ({ poster, title, plot }) => {
  return (
    <div>
      <img src={poster} />
      <h1>{title}</h1>
      <p>{plot}</p>
    </div>
  );
};

export default MovieCard;
