import { FunctionComponent, useState } from "react";
import { Input } from "components";
import {
  Container,
  PersonalContainer,
  TextAreaContainer,
  ButtonsContainer,
  Comment,
  MyLinkedin,
  Logo,
  Label,
} from "./styles";
import Button from "components/Button";
import emailjs from "@emailjs/browser";

const ContactPopup: FunctionComponent = () => {
  const [mailBody, setMailBody] = useState<any>({
    name: "",
    email: "",
    message: "",
  });

  const onInputChange = (e: any) => {
    setMailBody({ ...mailBody, [e.target.name]: e.target.value });
  };

  const onButtonClick = async (type?: string) => {
    try {
      if (type === "reset") {
        setMailBody({ name: "", email: "", message: "" });
      }

      const { name, email, message } = mailBody;

      if (!name || !email || !message) {
        alert("Please fill empty inputs");
      }

      await emailjs.send(
        "portfolio_nakandakare",
        "template_nf3v72v",
        mailBody,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      alert('Mail sent!')
    } catch (error: unknown) {
      alert(error);
    }
  };

  return (
    <Container>
      <PersonalContainer>
        <Input
          label={"NAME"}
          name={"name"}
          onChange={onInputChange}
          mailBody={mailBody}
        />
        <Input
          label={"EMAIL"}
          name={"email"}
          onChange={onInputChange}
          padLeft
          mailBody={mailBody}
        />
      </PersonalContainer>
      <TextAreaContainer>
        <Input
          label={"MESSAGE"}
          name={"message"}
          onChange={onInputChange}
          textArea
          mailBody={mailBody}
        />
      </TextAreaContainer>
      <ButtonsContainer>
        <Button label={"SEND MESSAGE"} onClick={onButtonClick} />
        <Button label={"RESET"} onClick={() => onButtonClick("reset")} dark />
      </ButtonsContainer>
      <Comment>Powered by EmailJS</Comment>
      <MyLinkedin
        href={"https://linkedin.com/in/kevin-nakandakare"}
        target="_blank"
      >
        <Logo />
        <Label>Linkedin - Kevin Nakandakare</Label>
      </MyLinkedin>
    </Container>
  );
};

export default ContactPopup;
