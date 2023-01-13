import styled from "styled-components";

export const HomeScreen = styled.div`
  background-color: transparent;
`;

export const ContainerWithImage = styled.div`
  background-image: url("https://portfolio-bucket-kn.s3.amazonaws.com/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  width: 100%;
`;

export const Spinner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`