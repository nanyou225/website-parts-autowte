import styled from "styled-components";

export const NContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
