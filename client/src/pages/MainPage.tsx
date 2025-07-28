// components
import MainPageButton from "../components/Buttons/MainPageButton";
// styled
import styled from "styled-components";
// images
import backgroundImage from "../assets/background.jpg"

const MainPage = () => {
    return (
        <Background>
            <MainPageButton />
        </Background>
    )
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`

export default MainPage;