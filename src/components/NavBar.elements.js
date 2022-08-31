import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.NavBar};
  grid-area: nav;
  padding: 0.25rem;

  header {
    width: 100%;
    height: 100px;
  }

  header .navbar {
    max-width: 1240px;
    height: 100%;
    padding: 0 1rem;
    margin: auto;
    overflow: flex;
    display: flex;
    justify-content: space-between;
  }

  header .logo {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
  }

  header nav.navbar .logo a {
    color: #fff;
  }

  header nav.navbar .search {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .hamburger {
    display: none;
    position: absolute;
    top: 2rem;
    right: 1rem;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .nav-item {
    padding: 0 1.2rem;
    font-size: 1.2rem;
  }

  .nav-item a {
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    .hamburger {
      display: block;
    }
    .nav-menu {
      background-color: ${({ theme }) => theme.colors.NavBar};
      position: fixed;
      left: -100%;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      align-items: center;
      transition: 0.4s;
      /* transition: all 0.25s ease-in-out; */
    }

    .nav-item {
      margin: 1.5rem 0;
      font-size: 1.8rem;
    }
  }
`;

export const NavSearch = styled.nav`
  align-self: center;
  margin-right: 3rem;

  .search-box {
    border-radius: 20px;
    border: none;
    outline: none;
    padding: 5px;
    width: 32rem;
    line-height: 30px;
    font-size: 17px;
    margin: inherit;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    transition: 0.4s;
  }
`;
