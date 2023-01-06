import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
`;

export const Subtitle = styled.div`
  font-weight: 600;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  @media (max-width: 480px) {
    padding: 0 0 2rem 0;
  }
`;

export const ImageContainer = styled.div`
  height: 20rem;
  width: 100%;
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
    cursor: pointer;
  }
`;
