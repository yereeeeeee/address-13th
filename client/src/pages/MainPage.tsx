// components
import MainPageButton from "@/components/Buttons/MainPageButton";
import Background from "@/styles/Background";
// react
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  // 로그인 되어 있으면 list 페이지로 리다이렉션
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/list");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Background>
      <MainPageButton />
    </Background>
  );
};

export default MainPage;
