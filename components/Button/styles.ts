import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props: {dark?: boolean}) => props.dark ? '#f1b1f22' : '#ffffff'};
    color: ${(props: {dark?: boolean}) => props.dark ? '#ffffff' : '#f1b1f22'}; !important;
    font-weight: 600;
    border-radius: 4px;
    border: 0;
    box-shadow: inset 0 0 0 1px #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 0.8rem;
    height: 2.75rem;
    letter-spacing: 0.2rem;
    line-height: 2.75rem;
    outline: 0;
    padding: 0 1.25rem 0 1.35rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    margin-right: 1.5rem;
`;