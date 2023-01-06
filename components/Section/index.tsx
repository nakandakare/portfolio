import { FunctionComponent } from "react";
import {
  Container,
  Title,
  Subtitle,
  SubtitleLeft,
  SubtitleRight,
  Description,
  ImageContainer,
  Img,
} from "./styles";

type props = {
  description: string;
  title?: string;
  subtitleLeft?: string;
  subtitleRight?: string;
  image?: string;
};

const Section: FunctionComponent<props> = ({
  title,
  subtitleLeft,
  subtitleRight,
  description,
  image,
}) => {
  const showSubtitle = subtitleRight || subtitleLeft;
  console.log(title);
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {showSubtitle && (
        <Subtitle>
          <SubtitleLeft>{subtitleLeft}</SubtitleLeft>
          <SubtitleRight>{subtitleRight}</SubtitleRight>
        </Subtitle>
      )}
      {image && (
        <ImageContainer title={title}>
          <Img src={image} alt={"Image"} />
        </ImageContainer>
      )}
      <Description>{description}</Description>
    </Container>
  );
};

export default Section;
