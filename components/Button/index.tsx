import { FunctionComponent } from "react";
import { Container } from './styles';

type props = {
    label: string;
    onClick: () => void;
    dark?: boolean;
}

const Button: FunctionComponent<props> = ({ label, dark, onClick }) => {
    return (
        <Container dark={dark} onClick={onClick}>
           {label}
        </Container>
    )
}

export default Button;