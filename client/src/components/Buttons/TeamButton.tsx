import styled from "styled-components";
import buttonImg from "@/assets/buttonImg.png";

const TeamButton = styled.div`
  cursor: pointer;
  background-image: url(${buttonImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 2rem 4rem;
  width: fit-content;
  height: fit-content;
  color: black;
`;
export default TeamButton;
