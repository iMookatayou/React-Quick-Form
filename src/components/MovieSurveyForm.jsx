import { useState } from "react";
import { Clapperboard } from "lucide-react";
import movies from "../data/movies";
import validateSurvey from "../utils/validation";
import FormActions from "./FormActions";
import MovieOptionList from "./MovieOptionList";
import SurveySuccess from "./SurveySuccess";
import TextField from "./TextField";

const initialFormData = {
  name: "",
  email: "",
  selectedMovie: "",
  comment: "",
};

function MovieSurveyForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = validateSurvey(formData);
  const isFormValid = Object.values(errors).every((error) => !error);

  const updateField = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleBlur = (field) => {
    setTouched((current) => ({
      ...current,
      [field]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      selectedMovie: true,
    });

    if (isFormValid) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setTouched({});
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#EAF0F7] px-4 py-[68px] font-sans text-black">
      <section className="mx-auto w-full max-w-[446px] overflow-hidden rounded-b-md bg-white text-left shadow-[0_10px_24px_rgba(0,0,0,0.15)]">
        <header className="flex h-[68px] items-center gap-2 bg-gradient-to-r from-[#8B1FE6] to-[#5047E5] px-6 text-white">
          <Clapperboard className="h-5 w-5" aria-hidden="true" />

          <h1 className="!m-0 !text-[22px] font-bold leading-none !text-white">
            Movie Survey
          </h1>
        </header>

        {!isSubmitted && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="px-6 pb-6 pt-7">
              <div className="mb-7">
                <TextField
                  id="name"
                  label="ชื่อ"
                  type="text"
                  autoComplete="name"
                  placeholder="กรุณากรอกชื่อของคุณ"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  error={touched.name ? errors.name : ""}
                  className="h-10"
                  required
                />
              </div>

              <div className="mb-7">
                <TextField
                  id="email"
                  label="อีเมล"
                  type="email"
                  autoComplete="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  error={touched.email ? errors.email : ""}
                  className="h-10"
                  required
                />
              </div>

              <div className="mb-7">
                <MovieOptionList
                  movies={movies}
                  selectedMovie={formData.selectedMovie}
                  onChange={(value) => updateField("selectedMovie", value)}
                  onBlur={() => handleBlur("selectedMovie")}
                  error={touched.selectedMovie ? errors.selectedMovie : ""}
                />
              </div>

              <TextField
                id="comment"
                label="ความคิดเห็นเกี่ยวกับหนัง"
                placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                value={formData.comment}
                onChange={(e) => updateField("comment", e.target.value)}
                rows={4}
                className="h-[97px] resize-none py-3"
                multiline
              />
            </div>

            <FormActions onReset={handleReset} />
          </form>
        )}

        {isSubmitted && (
          <SurveySuccess formData={formData} onReset={handleReset} />
        )}
      </section>
    </main>
  );
}

export default MovieSurveyForm;
