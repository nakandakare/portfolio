import { Section } from "components";
import { FunctionComponent } from "react";
import { Container } from "./styles";

const WorkPopup: FunctionComponent = () => {
  return (
    <Container>
      <Section
        title={"Software Engineer at Naranja X"}
        subtitle={"August 2021 - Now"}
        description={
          "I've been maintaining and improving exis"
        }
      />
      <Section
        title={"Frontend Developer"}
        subtitle={"August 2021 - Now"}
        description={
          "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work."
        }
      />
      <Section
        title={"Developer"}
        subtitle={"August 2021 - Now"}
        description={
          "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work."
        }
      />
      <Section
        title={"Freelancer"}
        subtitle={"August 2021 - Now"}
        description={
          "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work."
        }
      />
    </Container>
  );
};

export default WorkPopup;
