import styled from "styled-components";

const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: #2c90bc;
    color: white;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        background-color: #6bccf1;
    }

    &:disabled {
        background-color: #a3a2a2;
        color: #cccccc;
    }
`


export const S ={
    Button
}
