import { FunctionComponent } from "react";
import { Container } from './styles';

type Props = {
    name: String;
    onClick: () => void;
}

const Tab: FunctionComponent<Props> = ({ name, onClick }) => {
    return (
        <Container onClick={onClick}>
            {name}
        </Container>
    )
}

export default Tab;