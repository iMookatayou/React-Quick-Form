import MovieRadioButton from "./MovieRadioButton";

function MovieOptionList({
  movies,
  selectedMovie,
  onChange,
  onBlur,
  error = "",
}) {
  const errorId = error ? "selected-movie-error" : undefined;

  return (
    <fieldset aria-invalid={Boolean(error)} aria-describedby={errorId}>
      <legend className="mb-4 text-[13px] font-bold">
        เลือกหนังที่คุณชอบ{" "}
        <span className="text-red-500" aria-hidden="true">
          *
        </span>
      </legend>

      <div
        className={`flex flex-col gap-3 rounded-md border px-5 py-5 ${
          error ? "border-red-500" : "border-transparent"
        }`}
      >
        {movies.map((movie) => (
          <MovieRadioButton
            key={movie.title}
            movie={movie}
            selectedMovie={selectedMovie}
            onChange={onChange}
            onBlur={onBlur}
          />
        ))}
      </div>

      {error && (
        <p id={errorId} className="mt-3 text-[13px] text-red-500">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default MovieOptionList;
