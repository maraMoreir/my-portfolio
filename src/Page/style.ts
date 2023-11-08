import styled from "styled-components";
import backgroundImage from "../assets/banner-bg.png";

export const Container = styled.div`
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed; 
    z-index: 1;
    filter: saturate(100%) contrast(150%);

    @media (max-width: 768px) {
      height: 50vh;
    }
`;
