import styled from 'styled-components';
import Image from "next/image";

export const CloseButton = styled.div`
    position: absolute;
    top: 0;
    right 0;
    height: 5rem;
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`

export const CloseImg = styled(Image)`
    width: 1.5rem;
    height: 1.5rem;
`