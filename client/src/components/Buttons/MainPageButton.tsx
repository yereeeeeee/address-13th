import styled from "styled-components"

//images
import textbubble from "@/assets/textbubble.png"

const MainPageButton = () => {
    return (
        <ButtonContainer>
            나를 눌러라
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    background-image: url(${textbubble});
    background-size: cover;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default MainPageButton