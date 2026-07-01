function MovieRadioButton({ movie, selectedOption, onChange }) {
  return (
    <label>
      <input
        type="radio"
        name="option"
        value={movie.title}
        checked={selectedOption === movie.title}
        onChange={onChange}
      />
      <div>
        <p>{movie.title} ({movie.year})</p>
        <p>Director: {movie.director}</p>
      </div>
    </label>
  );
}

export default MovieRadioButton;