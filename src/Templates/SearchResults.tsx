import React from "react";
import MovieCard from "./Snippets/MovieCard";

interface Movie {
  poster: string;
  title: string;
  plot: string;
}

interface Movies {
  movies: Movie[];
}

const SearchResults = ({ movies }: Movies) => {
  return (
    <div className="bg-black">
      <div className="flex flex-wrap mx-auto container px-4">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
