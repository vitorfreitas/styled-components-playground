import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  color: #555;
  border: none;
  font-weight: 400;
  font-size: 1.8rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #999;

  &:focus {
    outline: none;
    border-bottom: 1px solid #189c6c;
  }
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
