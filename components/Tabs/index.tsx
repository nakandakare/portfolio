import { FunctionComponent, useState } from "react";
import { Container } from "./styles";
import { Tab, Popups } from "components";

const TabsName = ["WORK", "PROJECTS", "LINKS", "CONTACT"];

const Tabs: FunctionComponent = () => {
  const [selectedTab, selectTab] = useState<string>("");

  return (
    <Container>
      {TabsName.map((tab, index) => (
        <Tab key={index} name={tab} onClick={() => selectTab(tab)} />
      ))}
      <Popups selectedTab={selectedTab} selectTab={selectTab} />
    </Container>
  );
};

export default Tabs;
