import { FunctionComponent } from "react";
import { Container } from './styles';

type Props = {
    name: String;
    onClick: () => void;
    selectedTab?: string;
}

const Tab: FunctionComponent<Props> = ({ name, onClick, selectedTab }) => {
    return (
        <Container onClick={onClick} selected={selectedTab === name}>
            {name}
        </Container>
    )
}

export default Tab;