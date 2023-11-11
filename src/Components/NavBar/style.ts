import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.shadows[2]};
    height: 100px;

`;


export const Text = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[4]};
    font-weight: ${({ theme }) => theme.weight[6]};
    gap: ${({ theme }) => theme.space[5]};
    display: flex;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
    position: relative;

    &:hover {
        color: ${({ theme }) => theme.color.textMuted};
        transition: color 0.5s ease;
    }
`;
