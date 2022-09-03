import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.Footer};
  grid-area: footer;
  padding: 0.25rem;

  footer {
    width: 100%;
    height: 70;
  }
`;
