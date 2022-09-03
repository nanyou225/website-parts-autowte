import styled from "styled-components";

export const ContentBox = styled.div`
  display: flex;
  grid-gap: 0.2rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
