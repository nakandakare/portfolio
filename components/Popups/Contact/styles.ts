import styled from "styled-components";

export const Container = styled.div``;

export const PersonalContainer = styled.div`
  display: flex;
`;

export const TextAreaContainer = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  padding: 2rem 0;
`;

export const Comment = styled.span`
  color: white;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: grey;
`;

export const MyLinkedin = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.875rem;
    border: solid 1px #ffffff;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
    }
`;

export const Logo = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhVDHtC_MPbet9Iirxz2e9SCktSRH06CVew&usqp=CAU");
  background-size: cover;
  width: 2.25rem;
  height: 2.25rem;
  border: solid 1px #ffffff;
  border-radius: 100%;
  margin-right: 1.5rem;
`;

export const Label = styled.div`
    color: white;
    font-size: 1.25rem;
`;
