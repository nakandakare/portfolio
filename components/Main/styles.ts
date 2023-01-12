import styled from "styled-components";

export const MainContainer = styled.div<any>`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: ${(props: { hide: string }) => (props.hide ? "0" : "1")};
  transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out, opacity 0.2s ease-in-out;

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

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
