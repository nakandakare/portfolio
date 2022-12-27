import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 3.5rem;
  display: flex;

  @media (max-width: 736px) {
    min-height: 2.5rem;
  }
`;

export const Left = styled.div`
  width: 50%;
  min-height: 100%;
  border-right: solid 1px #ffffff;
`;

export const Right = styled.div`
  width: 50%;
  min-height: 100%;
`;
