import { FunctionComponent, ReactNode } from "react";
import { Container, InnerContainer, Title, PopupContainer } from "./styles";
import { CloseButton } from "components";
import { font } from "pages/_app";

type Props = {
  selectedTab: string | {};
  selectTab: (tab: string) => void;
  children: ReactNode;
  title: string;
};

const Popups: FunctionComponent<Props> = ({
  selectedTab,
  selectTab,
  children,
  title,
}) => {
  return (
    <PopupContainer open={!!selectedTab} onClose={() => selectTab("")} modal >
      <Container>
        <InnerContainer>
          <Title className={font.className}>{title}</Title>
          {children}
          <CloseButton onClick={() => selectTab("")} />
        </InnerContainer>
      </Container>
    </PopupContainer>
  );
};

export default Popups;
