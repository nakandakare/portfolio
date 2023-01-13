import { FunctionComponent } from "react";
import {
  Container,
  Title,
  Subtitle,
  Description,
  ImageContainer,
  Img,
  Ordered,
  ListItem,
} from "./styles";
import { font } from "pages/_app";

type props = {
  description?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  url?: string;
  hover?: boolean;
  ordered?: string[];
};

const Section: FunctionComponent<props> = ({
  title,
  subtitle,
  description,
  image,
  url,
  hover,
  ordered,
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
      {ordered ? (
        <Ordered>
          {ordered.map((item: string, i: number) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </Ordered>
      ) : (
        <Description>{description}</Description>
      )}
    </Container>
  );
};

export default Section;
