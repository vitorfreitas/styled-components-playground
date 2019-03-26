import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  color: #555;
  border: none;
  resize: none;
  font-size: 1.8rem;
  font-family: Arial;
  font-weight: 300;
  border-bottom: 1px solid #999;

  &:focus {
    outline: none;
    border-bottom: 1px solid #189c6c;
  }
`;

export default function TextArea(props) {
  return <StyledTextArea {...props} />;
}
