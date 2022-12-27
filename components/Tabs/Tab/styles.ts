import styled from "styled-components";

export const Container = styled.div`
  min-width: 7.5rem;
  height: 2.75rem;
  line-height: 2.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  border-bottom: 0;
  color: #ffffff;
  border-right: solid 1px #ffffff;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.075);
  }

  @media (max-width: 480px) {
    border-bottom: solid 1px #ffffff;
  }
`;
