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
          A fully responsive site template designed by A fully responsive <br />
          site template designed by A fully responsive site template designed by A fully responsive <br />
          site template designed by
        </Subtitle>
      </Container>
      <Separator />
    </>
  );
};

export default Biography;
