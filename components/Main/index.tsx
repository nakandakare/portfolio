import { Biography, Profile, Tabs, Footer } from "components";
import { _TabsContext } from "context/TabContext";
import { FunctionComponent, useContext } from "react";
import { MainContainer, Container } from './styles';
import { HOME_TABS } from 'constants/tabsName';

const Main: FunctionComponent = () => {
    const { selectedTab, selectTab } = useContext(_TabsContext);

    return (
        <MainContainer hide={selectedTab}>
            <pre />
            <Container >
                <Profile />
                <Biography />
                <Tabs tabsName={HOME_TABS} selectTab={selectTab} />
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default Main;