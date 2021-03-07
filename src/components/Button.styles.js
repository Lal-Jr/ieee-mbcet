import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => ( primary ? '#000' : '#010606')} ;
    white-space: nowrap;
    padding: ${({ big }) => ( big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#fff' : '#000')};
    font-size: ${({ fontBig }) => ( fontBig ? '20px' : '16px')};
    outline: none;
    text-decoration: none;
    border: 2px solid white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#0276FD' : '#01BF71')}
    }
`;