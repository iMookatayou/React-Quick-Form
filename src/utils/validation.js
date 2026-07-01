const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateSurvey({ name, email, selectedMovie }) {
  return {
    name: name.trim() ? "" : "โปรดใส่ชื่อของคุณ",
    email: !email.trim()
      ? "โปรดใส่อีเมลของคุณ"
      : emailPattern.test(email)
        ? ""
        : "รูปแบบอีเมลไม่ถูกต้อง",
    selectedMovie: selectedMovie ? "" : "กรุณาเลือกหนังที่คุณชอบ",
  };
}

export default validateSurvey;
