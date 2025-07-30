import styled from "styled-components";

const ListWrap = styled.div`
  width: 80vw;
  height: 80vh;
  background: rgba(255, 255, 255, 0.15); // 반투명 배경
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export default ListWrap;
