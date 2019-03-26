import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 5vw;
  background-color: #364147;
  justify-content: space-between;

  @media only screen and (max-width: 425px) {
    padding: 1rem 0 0 0;
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 45%;
  color: #ccc;
  border: none;
  font-size: 1.75rem;
  padding: 1.7rem 2rem;
  background-color: #252d31;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
