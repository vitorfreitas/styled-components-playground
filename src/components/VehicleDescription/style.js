import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  padding: 1.7rem 1.5rem;
  background-color: #fff;
`;

export const DescriptionInfo = styled.div`
  padding: 2.25rem 0;
  display: flex;

  & > * {
    flex-basis: 50%;
  }
`;

export const H1 = styled.h1`
  color: #58937c;
  font-size: 2rem;
`;

export const H2 = styled.h2`
  color: #364147;
  font-size: 1.55rem;
  padding: 0 0 1.5rem 0;
`;

export const H3 = styled.h3`
  color: #364147;
  font-size: 1.5rem;
  color: ${props => props.light && '#999'};
`;

export const Footer = styled.footer`
  display: flex;
  padding: 1.25rem;
  align-items: center;
  border-top: 1px solid #ccc;
  justify-content: space-between;
  margin: 2rem -1.7rem -1.5rem -1.7rem;
`;

export const Icon = styled.svg`
  margin-right: 2rem;

  fill: #364147;
  fill: ${props => props.clicked && '#189c6c'};
`;
