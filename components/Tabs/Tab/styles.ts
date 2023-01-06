import styled from "styled-components";

export const Container = styled.div`
  min-width: 7rem;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.7rem;
  border-bottom: 0;
  color: #ffffff;
  border-right: solid 1px #ffffff;
  display: flex;
  justify-content: center;
  background-color: ${(props: { selected: boolean }) => (props.selected ? 'rgba(255, 255, 255, 0.075)': 'transparent')};

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.075);
  }

  @media (max-width: 480px) {
    border-bottom: solid 1px #ffffff;
  }
`;
