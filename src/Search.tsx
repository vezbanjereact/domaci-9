import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import SearchResults from "./Templates/SearchResults";
import { createContext, useState } from "react";

const schema = z.object({
  movieTitle: z.string().min(3),
});

type FormFields = z.infer<typeof schema>;

type MovieFields = {
  poster: string;
  title: string;
  year: number;
};

export const ThemeContext = createContext<MovieFields[]>([]);

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      movieTitle: "",
    },
    resolver: zodResolver(schema),
  });

  const [movies, setMovies] = useState<MovieFields[]>([]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setMovies([]);
    axios
      .get(
        import.meta.env.VITE_BASE_URL +
          "?s=" +
          data.movieTitle +
          "&apikey=" +
          import.meta.env.VITE_REACT_APP_OMDBAPI_KEY,
      )
      .then((response) => {
        for (let index = 0; index < response.data.Search.length; index++) {
          const movie = response.data.Search[index];

          setMovies((prevItems) => [
            ...prevItems,
            {
              poster: movie.Poster,
              title: movie.Title,
              year: movie.Year,
            },
          ]);
        }
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div className="bg-gray-700 text-white">
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 items-start p-10 "
        >
          <label htmlFor="movieTitle">Movie Title</label>
          <input
            {...register("movieTitle")}
            id="movieTitle"
            type="text"
            placeholder="Movie Title"
            className="border-2 bg-white text-black rounded-md p-2 w-full"
          />
          {errors.movieTitle && (
            <div className="text-red-500">{errors.movieTitle.message}</div>
          )}
          <button
            disabled={isSubmitting}
            type="submit"
            className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
          >
            {isSubmitting ? "Loading..." : "Search"}
          </button>
        </form>

        <ThemeContext.Provider value={movies}>
          <SearchResults />
        </ThemeContext.Provider>
      </div>
    </div>
  );
};

export default Search;
