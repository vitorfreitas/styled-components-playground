import styled from 'styled-components';

export const ModalBackground = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);

  ${props => !props.visible && 'display: none; visibility: hidden'}
`;

export const Modal = styled.div`
  top: 50%;
  left: 50%;
  width: 70vw;
  background: #fff;
  position: absolute;
  padding: 2.5rem;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 4rem 0.2rem rgba(0, 0, 0, 0.7);
`;

export const H1 = styled.h1`
  color: #364147;
  font-size: 2.7rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;

  & > * {
    ${props => (props.fullWidth ? 'flex-basis: 100%;' : 'flex-basis: 45%;')}
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: flex-end;

  & > * {
    margin: 0 1rem;
  }
`;
