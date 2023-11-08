import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${({theme}) => theme.shadows[2]};

    @media (max-width: 768px) {
        height: 6vh; 
    }
`;

export const Text = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[4]};
    font-weight: ${({theme}) => theme.weight[3]};
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};

    &:hover {
        color: ${({theme}) => theme.color.textMuted};
        font-weight: ${({theme}) => theme.weight[4]};
    }
`;

const moveZigZag = keyframes`
    0% {
        transform: translateX(0) translateY(0);
    }
    25% {
        transform: translateX(200px) translateY(-50px);
    }
    50% {
        transform: translateX(0) translateY(0);
    }
    75% {
        transform: translateX(200px) translateY(50px);
    }
    100% {
        transform: translateX(0) translateY(0);
    }
`;

export const Image = styled.div`
    animation: ${moveZigZag} 10s linear infinite; 
    width: 200px;
    position: relative;
    bottom: 60px;
`;

export const Img = styled.img`
    width: 200px;
    height: 200px;
`;