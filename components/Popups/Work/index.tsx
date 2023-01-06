import { Section } from "components";
import { FunctionComponent } from "react";
import { Container } from "./styles";

const WorkPopup: FunctionComponent = () => {
  return (
    <Container>
      <Section
        title={"Software Engineer"}
        subtitleLeft={"PUZZLE"}
        subtitleRight={"Aug 2020 - Sep 2021"}
        description={
          "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work."
        }
      />
      <Section
        title={"Frontend Developer"}
        subtitleLeft={"PUZZLE"}
        subtitleRight={"Aug 2020 - Sep 2021"}
        description={
          "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work."
        }
      />
      <Section
        title={"Developer"}
        subtitleLeft={"PUZZLE"}
        subtitleRight={"Aug 2020 - Sep 2021"}
        description={
          "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work."
        }
      />
      <Section
        title={"Freelancer"}
        subtitleLeft={"PUZZLE"}
        subtitleRight={"Aug 2020 - Sep 2021"}
        description={
          "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work."
        }
      />
    </Container>
  );
};

export default WorkPopup;
