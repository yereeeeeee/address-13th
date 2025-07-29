import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//images
import textbubble from "@/assets/textbubble.png";

// functions
import passwordButtonClick from "@/hooks/passwordButtonClick";

const MainPageButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <ButtonContainer onClick={() => passwordButtonClick(navigate)}>
        누르시오
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  background-image: url(${textbubble});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5vw 7vh 7vw 7vh;
  margin-left: 20vw;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  font-family: "굴림";
`;

export default MainPageButton;
