import { Section } from "components";
import { FunctionComponent } from "react";
import { Container } from "./styles";

const AboutPopup: FunctionComponent = () => {
  return (
    <Container>
      <Section
        image={"https://portfolio-bucket-kn.s3.amazonaws.com/about.png"}
        description={
          "My name is Kevin Nakandakare. I’m a Software Engineer based in Buenos Aires, Argentina. I describe myself as a passionate developer who loves coding and creating creative solutions. Aside from my job, I like to learn the latest technologies like cloud computing, blockchain, and IoT. As an interesting fact, I was born in Japan, and I’ve lived in Japan, Brasil, and Argentina. In my free time you can find me at the gym, playing video games or at tech meetups."
        }
      />
    </Container>
  );
};

export default AboutPopup;
