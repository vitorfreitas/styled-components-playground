import styled from 'styled-components';

export const HomeSection = styled.section`
  padding: 0 5vw;
  min-height: 100vh;
  background-color: #e2e4e1;
`;

export const VehiclesSection = styled.section`
  display: flex;
  margin-top: 4rem;
  justify-content: space-between;

  & > * {
    flex-basis: 48%;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;

    & > *:last-child {
      margin-top: 2.5rem;
    }
  }
`;
