import { NextPage } from "next";
import { HomeScreen, Spinner } from "./styles";
import { About, Contact, Main, Popups, Projects, Work } from "components";
import { TABS_NAME } from "constants/tabsName";
import { useContext, useEffect, useState } from "react";
import { _TabsContext } from "context/TabContext";
import { IMAGES } from "images/images";
import ClipLoader from "react-spinners/RingLoader";

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

  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image: { url: string }) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => resolve(image.url);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <HomeScreen>
      <>
        {imgsLoaded ? (
          <Main />
        ) : (
          <Spinner>
            <ClipLoader loading={true} size={100} color={"white"} />
          </Spinner>
        )}
      </>
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
