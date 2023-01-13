import styled, { keyframes } from "styled-components";
import Popup from "reactjs-popup";

export const PopupContainer = styled(Popup)`
  &-overlay {
    overflow-y: auto;
  }
`;

const popupAnimation = keyframes`
  0% {
    transform: scale(1) translateY(0px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  1% {
    transform: scale(0.96) translateY(10px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  100% {
    transform: scale(1) translateY(0px);
    opacity: 1;
    box-shadow: 0 0 500px rgba(241, 241, 241, 0);
  }
`;

export const Container = styled.div`
  animation-name: ${popupAnimation};
  animation-duration: 0.3s;
  overflow-y: auto;
  margin: 1.5rem 0;
`;

export const InnerContainer = styled.div`
  padding: 4.5rem 2.5rem 1.5rem 2.5rem;
  position: relative;
  width: 50rem;
  max-width: 100%;
  background-color: rgba(27, 31, 34, 0.85);
  border-radius: 4px;
  animation-name: ${popupAnimation};
  animation-duration: 0.3s;

  @media (max-width: 1680px) {
    width: 40rem;
  }
  @media (max-width: 736px) {
    width: 30rem;
  }
  @media (max-width: 480px) {
    width: 22rem;
    padding: 3rem 0.875rem 0.5rem 1rem;
  }
`;

export const Title = styled.h2`
  width: max-content;
  padding-bottom: 0.5rem;
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  line-height: 1.4;
  letter-spacing: 0.5rem;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: solid 1px #ffffff;

  @media (max-width: 480px) {
    font-size: 1.3rem;
    line-height: 1.2;
    letter-spacing: normal;
  }
`;
