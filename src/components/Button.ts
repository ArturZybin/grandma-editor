import styled from "styled-components";

export const Button = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;

    padding: 10px 15px;
    position: relative;

    cursor: pointer;
    transition: box-shadow .1s ease-in-out;
    text-transform: uppercase;

    color: #fff;
    border: 2px solid #9844ab;
    border-radius: 10px;
    outline: none;
    background-color: #e17cf7;
    box-shadow: 1px 1px 5px #9844ab, 1px 3px 10px #e17cf7;

    &:active {
        box-shadow: 1px 1px 1px #9844ab, 1px 3px 3px #e17cf7;
    }
`