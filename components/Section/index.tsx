import { FunctionComponent } from "react";
import {
  Container,
  Title,
  Subtitle,
  Description,
  ImageContainer,
  Img,
} from "./styles";
import { font } from "pages/_app";

type props = {
  description: string;
  title?: string;
  subtitle?: string;
  image?: string;
  url?: string;
  hover?: boolean;
};

const Section: FunctionComponent<props> = ({
  title,
  subtitle,
  description,
  image,
  url,
  hover,
}) => {
  const onImgClick = () => {
    url && window.open(url, "_blank", "noreferrer");
  };

  return (
    <Container className={font.className}>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {image && (
        <ImageContainer title={title} onClick={onImgClick}>
          <Img src={image} alt={"Image"} hover={hover} />
        </ImageContainer>
      )}
      <Description>{description}</Description>
    </Container>
  );
};

export default Section;
