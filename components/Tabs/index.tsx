import { FunctionComponent } from "react";
import { Container } from "./styles";
import { Tab } from "components";
import { _TabsContext } from "context/TabContext";

type props = {
  tabsName: string[];
  selectTab: (val: string) => void;
  selectedTab?: string;
};

const Tabs: FunctionComponent<props> = ({ tabsName, selectTab, selectedTab }) => {
  return (
    <Container>
      {tabsName.map((tab, index) => (
        <Tab key={index} name={tab} onClick={() => selectTab(tab)} selectedTab={selectedTab} />
      ))}
    </Container>
  );
};

export default Tabs;
