import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// hooks
import goHome from "@/hooks/goHome";
// imgs
import background from "@/assets/404page.jpg";

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackgroundImg>
        <HomeButton
          onClick={() => {
            goHome(navigate);
          }}
        ></HomeButton>
      </BackgroundImg>
    </>
  );
};

const BackgroundImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

const HomeButton = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export default Error404Page;
