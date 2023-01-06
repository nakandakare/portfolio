import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    color: #ffffff;
    padding-top: 1.5rem;
    padding-left: ${(props: { padLeft?: boolean}) => props.padLeft ? '1.5rem' : '0'};
`;

export const Label = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
    line-height: 1.5;
    text-transform: uppercase;
`;

export const InputArea = styled.input`
    width: 100%;
    background-color: transparent;
    border-radius: 4px;
    border: solid 1px #ffffff;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1rem;
    text-decoration: none;
    width: 100%;
    height: 2.75rem;
`;

export const TextArea = styled.textarea`
    width: 100%;
    background-color: transparent;
    border-radius: 4px;
    border: solid 1px #ffffff;
    color: inherit;
    display: block;
    outline: 0;
    padding: 1rem;
    text-decoration: none;
    width: 100%;
    height: 10rem;
`;