import { Section } from "components";
import { FunctionComponent } from "react";
import { PROJECTS_DETAILS } from "constants/tabsName";

type props = {
  projectName: string;
};

const CryptoPay: FunctionComponent<props> = ({ projectName }) => {
  const project = PROJECTS_DETAILS[projectName];

  return (
    <Section
      title={project.name}
      description={project.description}
      image={project.image}
      url={project.url}
      hover
    />
  );
};

export default CryptoPay;
