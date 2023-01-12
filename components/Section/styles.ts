import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: fit-content;;
`;

export const Title = styled.h2`
  font-weight: 600;
  color: #ffffff;
`;

export const Subtitle = styled.div`
  font-weight: 400;
  padding: 0.25rem 1rem 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #93a6af;

  @media (max-width: 480px) {
    width: 20rem;
    font-size: 0.875rem;
    padding: 0.5rem 0;
  }
`;

export const SubtitleLeft = styled.h3`
  font-weight: 600;
`;

export const SubtitleRight = styled.h3`
  font-weight: 600;
`;

export const Description = styled.div`
  height: fit-content;
  padding: 0 1rem 2rem 1rem;
  line-height: 1.4;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    padding: 0 0 2rem 0;
  }
`;

export const ImageLabel = styled.img`
  position: absolute;
  width: 35px;
  height: 35px;
  filter: invert(100%);
  left: 50%;
  top: 50%;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;

  padding: ${(props: { title?: string}) => (props.title ? '2rem 1rem' : '0rem 1rem 2rem 1rem')};
  @media (max-width: 480px) {
    padding: 0 0 2rem 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;

  &: hover {
    ${(props: { hover?: boolean}) => (props.hover ? 'cursor: pointer; opacity: 0.5;' : '')};
  }
`;

export const Spinner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding 1rem 0;
`;