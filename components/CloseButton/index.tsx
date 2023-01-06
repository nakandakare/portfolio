import { FunctionComponent } from "react";
import { CloseButton, CloseImg } from './styles';
import Close from "images/close.png";

type Props = {
  onClick: () => void;
}

const CloseComponent: FunctionComponent<Props> = ({ onClick }) => {
    return (
      <CloseButton onClick={onClick}>
        <CloseImg src={Close} alt="Close" />
      </CloseButton>
    )
}

export default CloseComponent;