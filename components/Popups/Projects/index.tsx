import { Project, Tabs } from "components";
import { PROJECTS_NAME } from "constants/tabsName";
import { FunctionComponent, useState } from "react";
import { Container } from "./styles";

const ProjectPopup: FunctionComponent = () => {
  const [selectedProject, setProject] = useState(PROJECTS_NAME[0])

  return (
    <Container>
      <Tabs tabsName={PROJECTS_NAME} selectTab={setProject} selectedTab={selectedProject} />
      <Project projectName={selectedProject}/>
    </Container>
  );
};

export default ProjectPopup;
