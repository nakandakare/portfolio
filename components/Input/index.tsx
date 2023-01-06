import { FunctionComponent } from "react";
import { Container, Label, InputArea, TextArea } from "./styles";

export interface IMailBody {
  [key: string]: { name: string; description: string; image: string };
}

type props = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
  mailBody: IMailBody;
  padLeft?: boolean;
  textArea?: boolean;
};

const Input: FunctionComponent<props> = ({ label, padLeft, name, textArea, onChange, mailBody }) => {
  const value: any = mailBody[name];

  return (
    <Container padLeft={padLeft}>
      <Label>{label}</Label>
      {
          textArea ? <TextArea onChange={onChange} name={name} value={value} /> : <InputArea onChange={onChange} name={name} value={value} />
      }
    </Container>
  );
};

export default Input;
