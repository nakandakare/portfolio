import { FunctionComponent } from "react";
import { Container, Title, Subtitle } from "./styles";
import { Separator } from "components";

const Biography: FunctionComponent = () => {
  return (
    <>
      <Separator />
      <Container>
        <Title>Hello, I&apos;m Kevin</Title>
        <Subtitle>
          I started programming in 2018, since then creating system applications
          became my passion. <br/>I’m eager to learn and ready to expand my knowledge
          in the technology system.<br/> Get more information about me in the section
          below.
        </Subtitle>
      </Container>
      <Separator />
    </>
  );
};

export default Biography;
