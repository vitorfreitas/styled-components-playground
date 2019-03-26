import React from 'react';
import { HeaderContainer, H1, Icon } from './style';

export default function Header({ onClick }) {
  return (
    <HeaderContainer>
      <H1>Veículo</H1>
      <Icon onClick={onClick}>&#43;</Icon>
    </HeaderContainer>
  );
}
