import { NextPage } from "next";
import { HomeScreen, ContainerWithImage } from "./styles";
import { Footer, Main } from 'components';

const HomePage: NextPage = () => {
  return (
    <HomeScreen>
      <ContainerWithImage>
          <Main />
          <Footer />
      </ContainerWithImage>
    </HomeScreen>
  );
};

export default HomePage;
