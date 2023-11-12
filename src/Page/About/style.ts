import styled from "styled-components";

export const Container = styled.div`
    width: 600px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    color: ${({theme}) => theme.color.text};
`;

export const Description = styled.div`
    color: ${({theme}) => theme.color.text};
`;

