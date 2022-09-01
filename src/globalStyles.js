import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    text-decoration:none;
    list-style:none
}

body{
  background-color: ${({ theme }) => theme.colors.body};
}
`;

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.14fr 0.07fr 0.5fr 0.5fr 0.15fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar sidebar sidebar sidebar"
    "main main main main"
    "content content content content"
    "footer footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.2fr 2.2fr 1.2fr 0.5fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
  color: white;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 0;
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: azure;
  color: aliceblue;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffff;
    background-color: bisque;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export default GlobalStyle;
