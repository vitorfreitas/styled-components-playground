import React from 'react';
import VehicleItem from '../VehicleItem';
import styled from 'styled-components';

const H2 = styled.h2`
  color: #364147;
  font-size: 1.55rem;
  padding: 0 0 1.5rem 0;
`;

export default function VehiclesList({
  vehicles,
  handleItemClick,
  selectedVehicle
}) {
  return (
    <section>
      <H2>Lista de veículos</H2>
      {vehicles.map((vehicle, i) => (
        <VehicleItem
          key={i}
          vehicle={vehicle}
          onClick={handleItemClick}
          selectedVehicle={selectedVehicle}
        />
      ))}
    </section>
  );
}
