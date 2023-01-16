import { FunctionComponent } from "react";
import { CloseButton, CloseImg } from './styles';

type Props = {
  onClick: () => void;
}

const CloseComponent: FunctionComponent<Props> = ({ onClick }) => {
    return (
      <CloseButton onClick={onClick}>
        <CloseImg src={'https://portfolio-bucket-kn.s3.amazonaws.com/close.png'} alt="Close" />
      </CloseButton>
    )
}

export default CloseComponent;