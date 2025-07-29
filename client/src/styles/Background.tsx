// components/Common/Background.tsx
import styled from "styled-components";
import backgroundImage from "@/assets/background.jpg";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export default Background;
