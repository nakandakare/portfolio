import styled from "styled-components";

export const HomeScreen = styled.div`
  background-color: black;
`;

export const ContainerWithImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2240&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6;
  width: 100%;
  height: 100vh;
  padding: 4rem 2rem;

  @media (max-width: 1680px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 736px) {
    padding: 2rem 1rem;
  }
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;
