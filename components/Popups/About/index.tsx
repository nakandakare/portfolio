import { Section } from "components";
import { FunctionComponent } from "react";
import { Container } from "./styles";

const AboutPopup: FunctionComponent = () => {
  return (
    <Container>
      <Section image={"https://portfolio-bucket-kn.s3.amazonaws.com/about.png"} description={"Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet."}/>
    </Container>
  );
};

export default AboutPopup;
