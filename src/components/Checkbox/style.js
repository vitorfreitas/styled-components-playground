import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  color: #999;
  display: block;
  cursor: pointer;
  font-size: 1.6rem;
  user-select: none;
  position: relative;
  padding-left: 3.2rem;

  &:hover .input ~ .checkmark,
  & .input:focus ~ .checkmark {
    background-color: #ccc;
  }

  & .input:checked ~ .checkmark {
    background-color: #58937c;
  }

  & .input:checked ~ .checkmark:after {
    display: block;
  }
`;

export const CheckboxInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  cursor: pointer;
  position: absolute;
`;

export const Checkmark = styled.span`
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  position: absolute;
  background-color: #ddd;

  &::after {
    content: '';
    display: none;
    position: absolute;

    top: 0.7rem;
    left: 0.9rem;
    width: 0.6rem;
    height: 1rem;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
