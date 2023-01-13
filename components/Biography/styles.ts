import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 2rem;
  transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  transition-delay: 0.2s;
  max-height: 40rem;
  overflow: hidden;
  border-style: solid;
  border-color: #ffffff;
  border-top-width: 1px;
  border-bottom-width: 1px;
  max-width: 100%;
  border-left: 0;
  border-right: 0;

  @media (max-width: 736px) {
    padding: 2.5rem 1rem;
  }
  @media (max-width: 480px) {
    padding: 2.5rem 0;
  }

  &:before {
    width: 20rem;
    height: 20rem;
    background-color: blue;
  }
`;

export const Title = styled.span`
  font-size: 2.25rem;
  letter-spacing: 0.5rem;
  margin: 0 0 1rem 0;
  color: #ffffff;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 736px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 2;
  color: #ffffff;
  text-align: center;
  @media (max-width: 736px) {
    font-size: 0.875rem;
  }
`;
