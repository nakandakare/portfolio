import { Biography, Profile, Tabs } from "components";
import { FunctionComponent } from "react";
import { Container } from './styles';

const Main: FunctionComponent = () => {
    return (
        <Container>
            <Profile />
            <Biography />
            <Tabs />
        </Container>
    )
}

export default Main;