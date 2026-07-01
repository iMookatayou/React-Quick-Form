import { useState } from "react";
import { CheckCircle, Clapperboard, RotateCcw, Send } from "lucide-react";
import movies from "../data/movies";
import MovieRadioButton from "./MovieRadioButton";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function MovieSurveyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedMovie: "",
    comment: "",
  });

  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    name: formData.name.trim() ? "" : "โปรดใส่ชื่อของคุณ",
    email: !formData.email.trim()
      ? "โปรดใส่อีเมลของคุณ"
      : emailPattern.test(formData.email)
        ? ""
        : "รูปแบบอีเมลไม่ถูกต้อง",
    selectedMovie: formData.selectedMovie ? "" : "กรุณาเลือกหนังที่คุณชอบ",
  };

  const isFormValid = !errors.name && !errors.email && !errors.selectedMovie;

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
    setFormData({
      name: "",
      email: "",
      selectedMovie: "",
      comment: "",
    });

    setTouched({});
    setIsSubmitted(false);
  };

  const hasMovieError = touched.selectedMovie && errors.selectedMovie;

  return (
    <main className="min-h-screen bg-[#EAF0F7] px-4 py-[68px] font-sans text-black">
      <section className="mx-auto w-full max-w-[446px] overflow-hidden rounded-b-md bg-white text-left shadow-[0_10px_24px_rgba(0,0,0,0.15)]">
        <header className="flex h-[68px] items-center gap-2 bg-gradient-to-r from-[#8B1FE6] to-[#5047E5] px-6 text-white">
          <Clapperboard className="h-5 w-5" aria-hidden="true" />

          <h1 className="text-[18px] font-bold leading-none">
            Movie Survey
          </h1>
        </header>

        {!isSubmitted && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="px-6 pb-6 pt-7">
              <div className="mb-7">
                <label
                  htmlFor="name"
                  className="mb-3 block text-[13px] font-bold"
                >
                  ชื่อ <span className="text-red-500">*</span>
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="กรุณากรอกชื่อของคุณ"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={`h-10 w-full rounded-md border px-3 text-sm outline-none placeholder:text-gray-500 ${
                    touched.name && errors.name
                      ? "border-red-500"
                      : "border-gray-300 focus:border-indigo-500"
                  }`}
                />

                {touched.name && errors.name && (
                  <p className="mt-2 text-[13px] text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mb-7">
                <label
                  htmlFor="email"
                  className="mb-3 block text-[13px] font-bold"
                >
                  อีเมล <span className="text-red-500">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={`h-10 w-full rounded-md border px-3 text-sm outline-none placeholder:text-gray-500 ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-indigo-500"
                  }`}
                />

                {touched.email && errors.email && (
                  <p className="mt-2 text-[13px] text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mb-7">
                <p className="mb-4 text-[13px] font-bold">
                  เลือกหนังที่คุณชอบ{" "}
                  <span className="text-red-500">*</span>
                </p>

                <div
                  className={`flex flex-col gap-3 rounded-md border px-5 py-5 ${
                    hasMovieError ? "border-red-500" : "border-transparent"
                  }`}
                >
                  {movies.map((movie) => (
                    <MovieRadioButton
                      key={movie.title}
                      movie={movie}
                      selectedMovie={formData.selectedMovie}
                      onChange={(value) => updateField("selectedMovie", value)}
                      onBlur={() => handleBlur("selectedMovie")}
                    />
                  ))}
                </div>

                {hasMovieError && (
                  <p className="mt-3 text-[13px] text-red-500">
                    {errors.selectedMovie}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="mb-3 block text-[13px] font-bold"
                >
                  ความคิดเห็นเกี่ยวกับหนัง
                </label>

                <textarea
                  id="comment"
                  placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                  value={formData.comment}
                  onChange={(e) => updateField("comment", e.target.value)}
                  rows={4}
                  className="h-[97px] w-full resize-none rounded-md border border-gray-300 px-3 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
              <button
                type="button"
                onClick={handleReset}
                className="flex h-10 items-center gap-2 rounded-md border border-gray-300 bg-white px-4 text-sm font-bold text-black hover:bg-gray-50"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                รีเซ็ต
              </button>

              <button
                type="submit"
                className="flex h-10 items-center gap-2 rounded-md bg-[#6C35E7] px-4 text-sm font-bold text-white hover:bg-[#5B2FD0]"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                ส่งแบบสำรวจ
              </button>
            </div>
          </form>
        )}

        {isSubmitted && (
          <div className="p-6">
            <div className="rounded-md border border-green-300 bg-green-50 px-4 py-5">
              <h2 className="mb-5 flex items-center gap-2 text-lg font-bold !text-green-900">
                <CheckCircle className="h-5 w-5 !text-green-600" aria-hidden="true" />
                ส่งแบบสำรวจสำเร็จ!
              </h2>

              <dl className="grid grid-cols-[110px_1fr] gap-y-4 text-sm">
                <dt className="font-bold !text-gray-600">ชื่อ:</dt>
                <dd className="!text-black">{formData.name}</dd>

                <dt className="font-bold !text-gray-600">อีเมล:</dt>
                <dd className="!text-black">{formData.email}</dd>

                <dt className="font-bold !text-gray-600">หนังที่เลือก:</dt>
                <dd className="font-medium !text-purple-600">
                  {formData.selectedMovie}
                </dd>
              </dl>

              {formData.comment.trim() && (
                <>
                  <div className="my-4 border-t border-green-200" />

                  <p className="mb-3 text-sm font-bold !text-gray-600">
                    ความคิดเห็น:
                  </p>

                  <div className="rounded-md bg-white px-4 py-3 text-sm !text-black">
                    {formData.comment}
                  </div>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="mt-6 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#181818] px-4 text-sm font-bold text-white hover:bg-black"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              ทำแบบสำรวจใหม่
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default MovieSurveyForm;