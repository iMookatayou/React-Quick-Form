function MovieRadioButton({ movie, selectedMovie, onChange, onBlur }) {
  const isSelected = selectedMovie === movie.title;

  return (
    <label
      className={`flex cursor-pointer items-start gap-2.5 rounded-md border px-3 py-3 text-left transition ${
        isSelected
          ? "border-[#6C35E7] bg-purple-50"
          : "border-transparent bg-white hover:bg-gray-50"
      }`}
    >
      <input
        type="radio"
        name="selectedMovie"
        value={movie.title}
        checked={isSelected}
        onChange={() => onChange(movie.title)}
        onBlur={onBlur}
        className="mt-[3px] h-4 w-4 appearance-none rounded-full border border-black bg-white checked:border-[#6C35E7] checked:bg-[#6C35E7] checked:shadow-[inset_0_0_0_3px_white]"
      />

      <span>
        <span className="block text-[14px] leading-5 text-black">
          {movie.title} ({movie.year})
        </span>

        <span className="block text-[14px] leading-5 text-gray-600">
          Director: {movie.director}
        </span>
      </span>
    </label>
  );
}

export default MovieRadioButton;