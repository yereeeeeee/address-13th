import styled from "styled-components";

const FolderContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const FolderTab = styled.div`
  position: relative;
  top: -50px;
  left: 10px;
  width: 13vw;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem 0.5rem 0 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const FolderBody = styled.div``;

export { FolderContainer, FolderTab, FolderBody };
