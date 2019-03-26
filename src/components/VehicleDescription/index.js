import React from 'react';
import {
  DescriptionContainer,
  H1,
  H3,
  DescriptionInfo,
  H2,
  Footer,
  Icon
} from './style';
import Button from '../Button';

export default function VehicleDescription({ vehicle, onEdit }) {
  return (
    <section>
      <H2>Detalhes</H2>
      <DescriptionContainer>
        <H1>{vehicle.vehicle}</H1>

        <DescriptionInfo>
          <div>
            <H3>Marca</H3>
            <H3 light>{vehicle.brand}</H3>
          </div>

          <div>
            <H3>Ano</H3>
            <H3 light>{vehicle.year}</H3>
          </div>
        </DescriptionInfo>

        <H3>{vehicle.description}</H3>

        <Footer>
          <Button text='Editar' onClick={() => onEdit(vehicle)} />
          <Icon
            width='22'
            height='22'
            viewBox='0 0 32 32'
            clicked={vehicle.sold}>
            <path d='M30.5 0h-12c-0.825 0-1.977 0.477-2.561 1.061l-14.879 14.879c-0.583 0.583-0.583 1.538 0 2.121l12.879 12.879c0.583 0.583 1.538 0.583 2.121 0l14.879-14.879c0.583-0.583 1.061-1.736 1.061-2.561v-12c0-0.825-0.675-1.5-1.5-1.5zM23 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z' />
          </Icon>
        </Footer>
      </DescriptionContainer>
    </section>
  );
}
