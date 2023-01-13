import { Section } from "components";
import { FunctionComponent } from "react";
import { Container } from "./styles";

// •
const WorkPopup: FunctionComponent = () => {
  return (
    <Container>
      <Section
        title={"Software Engineer at Naranja X"}
        subtitle={"September 2021 - Now"}
        ordered={[
          "Maintaining and improving existing core products of the company that’s used by 5 million people (credit cards origination) using Node.js and Express as a main techonlogy",
          "Adding new features to the core products creating APIs.",
          "Use of AWS services like SQS, DynamoDB, EventBridge Rules, Lambda, SecreteManager, SDK, to implement new features.",
          "I’ve Implemented new features that allow low credit capacity (score) clients to access credit cards, cooperating with another company from the UK. (Consuming their api & webhook)",
          "Migration of legacy systems like SOA or OSB to the AWS platform.",
          "Chai / Mocha for TDD.",
        ]}
      />
      <Section
        title={"Frontend Developer at Puzzle"}
        subtitle={"August 2020 - September 2021"}
        ordered={[
          "Developed web applications using React + Typescript for multiple clients. (platform, e-commerce)",
          "Developed a mobile application using React Native for a bank company. This application is similar to a quiz game, where users can learn about finance playing the game. (Link to the App Store)",
          "Responsive application for all types of devices",
          "Use of redux and context API for global state management",
          "Use of container/presentational pattern",
          "Integration with graphql backend using Apollo",
          "Use of styling libraries like styled-components and sass",
        ]}
      />
      <Section
        title={"Freelancer"}
        subtitle={"March 2020 - September 2020"}
        ordered={[
          "Developed an application for a client from Spain as a full stack developer using React, Express (Node) and MySQL."
        ]}
      />
    </Container>
  );
};

export default WorkPopup;
