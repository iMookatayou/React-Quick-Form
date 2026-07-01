import { useState } from "react";
import movies from "../data/movies";
import MovieRadioButton from "./MovieRadioButton";

function MovieSurveyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    alert(JSON.stringify({ name, email, selectedMovie, comment }, null, 2));
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSelectedMovie("");
    setComment("");
  };

  return (
    <div>
      <h1>Movie Survey</h1>

      <label>
        ชื่อ
        <input
          type="text"
          placeholder="กรุณากรอกชื่อของคุณ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        อีเมล
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <p>เลือกหนังที่คุณชอบ</p>
      {movies.map((movie) => (
        <MovieRadioButton
          key={movie.title}
          movie={movie}
          selectedOption={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
        />
      ))}

      <label>
        ความคิดเห็นเกี่ยวกับหนัง
        <textarea
          placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>

      <button onClick={handleReset}>รีเซ็ต</button>
      <button onClick={handleSubmit}>ส่งแบบสำรวจ</button>
    </div>
  );
}

export default MovieSurveyForm;