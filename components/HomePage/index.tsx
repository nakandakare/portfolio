import { NextPage } from "next";
import { HomeScreen, ContainerWithImage } from "./styles";
import { About, Contact, Main, Popups, Projects, Work } from "components";
import { TABS_NAME } from 'constants/tabsName';
import { useContext } from "react";
import { _TabsContext } from 'context/TabContext';

const getTabComponent = (title: string) => {
  switch (title) {
    case TABS_NAME.WORK:
      return <Work />;
    case TABS_NAME.PROJECTS:
      return <Projects />;
    case TABS_NAME.ABOUT:
      return <About />;
    case TABS_NAME.CONTACTS:
      return <Contact />;
    default:
      return <Work />;
  }
};

const HomePage: NextPage = () => {
  const { selectTab, selectedTab } = useContext(_TabsContext);

  return (
    <HomeScreen>
      <ContainerWithImage>
        <Main />
      </ContainerWithImage>
      <Popups  
        selectedTab={selectedTab}
        selectTab={selectTab}
        title={selectedTab}
      >
        {getTabComponent(selectedTab)}
      </Popups>
    </HomeScreen>
  );
};

export default HomePage;
