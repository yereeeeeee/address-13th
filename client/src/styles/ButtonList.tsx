import styled from "styled-components";

const ButtonList = styled.div<{ hidden?: boolean }>`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 1rem;
`;

export default ButtonList;
