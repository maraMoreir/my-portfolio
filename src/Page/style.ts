import styled from "styled-components";
import backgroundImage from "../assets/my.png";

export const Container = styled.div`
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    filter: saturate(100%) contrast(150%);

    @media (max-width: 768px) {
      height: 50vh;
    }
`;
