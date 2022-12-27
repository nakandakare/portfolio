import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 0;
  list-style: none;
  padding-left: 0;
  border: solid 1px #ffffff;
  border-radius: 4px;

  @media (max-width: 480px) {
    flex-direction: column;
    min-width: 10rem;
    max-width: 100%;
  }
`;
