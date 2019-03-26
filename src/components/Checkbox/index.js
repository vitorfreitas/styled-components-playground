import React from 'react';
import { CheckboxContainer, CheckboxInput, Checkmark } from './style';

export default function Checkbox(props) {
  return (
    <CheckboxContainer>
      {props.text}
      <CheckboxInput {...props} className='input' type='checkbox' />
      <Checkmark className='checkmark' />
    </CheckboxContainer>
  );
}
