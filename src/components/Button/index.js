import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  color: #fff;
  border: none;
  width: 15rem;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;
  transition: 0.2s all;
  padding: 1rem 2.5rem;
  text-transform: uppercase;
  background-color: #45535a;

  ${({ outline }) =>
    outline &&
    `
    color: #45535a;
    border: 1px solid #45535a;
    background-color: transparent;

    &:hover {
      color: #fff
    }
  `}

  &:link,
  &:active,
  &:visited {
    border: none;
    outline: none;
  }

  &:hover {
    background-color: #22292d;
  }
`;

export default function Button(props) {
  return <StyledButton {...props}>{props.text}</StyledButton>;
}
