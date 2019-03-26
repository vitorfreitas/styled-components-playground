import styled from 'styled-components';

export const VehicleContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  background-color: #fff;
  background-color: ${props => props.selected && '#d6d9da'};
`;

export const H2 = styled.h2`
  cursor: pointer;
  font-size: 1.6rem;

  color: #364147;
  color: ${props => props.secondary && '#58937c'};
  color: ${props => props.light && '#999'};
`;

export const Icon = styled.svg`
  top: 40%;
  right: 4rem;
  fill: #364147;
  cursor: pointer;
  position: absolute;

  fill: ${props => props.clicked && '#189c6c'};
`;
