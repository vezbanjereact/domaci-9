import { useContext } from "react";
import MovieCard from "./Snippets/MovieCard";
import { ThemeContext } from "../Search";

const SearchResults = () => {
  const movies = useContext(ThemeContext);

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
