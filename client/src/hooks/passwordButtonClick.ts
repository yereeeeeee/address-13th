const passwordButtonClick = (navigate: (path: string) => void) => {
  while (true) {
    const pw = prompt("비밀번호 주시오");

    if (pw === null) {
      return;
    }

    if (pw === import.meta.env.VITE_PASSWORD) {
      localStorage.setItem("isLoggedin", "true");
      navigate("/list");
      return;
    } else {
      alert("다시 입력해 주세용");
    }
  }
};

export default passwordButtonClick;
