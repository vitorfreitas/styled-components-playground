import React from 'react';
import { Nav, H1, Input } from './style';

export default function Navigation() {
  return (
    <Nav>
      <H1>Fullstack</H1>
      <Input type='text' placeholder='Buscar por um veiculo' />
    </Nav>
  );
}
