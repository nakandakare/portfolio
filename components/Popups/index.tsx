import { FunctionComponent } from "react";
import { Container } from "./styles";
import Popup from "reactjs-popup";

type Props = {
    selectedTab: string;
    selectTab: (tab: string) => void;
};

const Popups: FunctionComponent<Props> = ({ selectedTab, selectTab }) => {
  return (
    <Popup open={!!selectedTab} onClose={() => selectTab("")} modal>
      <Container> {selectedTab} </Container>
    </Popup>
  );
};

export default Popups;
