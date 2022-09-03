import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    border: 3px solid #299B01;
    outline: 0;
    background-color: #299B01;
    margin: 0 auto;
    font-family: inherit;
    width: 250px;
    height: 65px;
    color: #fff;
    font-size: 21px;
    transition: color .3s, background-color .3s;

    &:hover {
        background-color: #fff;
        color: #299B01;
    }

    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border-color: #aaa;
    }
`;