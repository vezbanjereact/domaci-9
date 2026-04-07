import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";

const schema = z.object({
  movieTitle: z.string().min(3),
});

type FormFields = z.infer<typeof schema>;

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

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
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
      </div>
    </div>
  );
};

export default Search;
