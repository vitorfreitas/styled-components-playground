import React, { Component } from 'react';
import { Modal, ModalBackground, H1, Row, ModalFooter } from './style';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
import TextArea from '../TextArea';
import {
  createVehicle,
  updateVehicle,
  removeVehicle
} from '../../services/vehicles';

export default class VehicleModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: props.vehicle._id || undefined,
      vehicle: props.vehicle.vehicle || '',
      brand: props.vehicle.brand || '',
      year: props.vehicle.year || '',
      description: props.vehicle.description || '',
      sold: props.vehicle.sold || false
    };
  }

  handleModalBackgroundClick = e => {
    if (e.target.closest('#modal')) return;

    const { onClose } = this.props;
    onClose();
  };

  handleInputChange = e => {
    const { name } = e.target;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [name]: value
    });
  };

  submitAddForm = async () => {
    const { onSuccess } = this.props;

    try {
      const vehicle = await createVehicle(this.state);
      onSuccess(vehicle);
    } catch (e) {
      console.warn(e);
    }
  };

  submitEditForm = async id => {
    const { onSuccess } = this.props;

    try {
      const vehicle = await updateVehicle(id, this.state);
      onSuccess(vehicle);
    } catch (e) {
      console.warn(e);
    }
  };

  handleRemove = id => {
    const { onSuccess } = this.props;

    removeVehicle(id).then(() => {
      onSuccess();
    });
  };

  render() {
    const { visible, onClose } = this.props;
    const { _id, vehicle, brand, year, description, sold } = this.state;

    return (
      <ModalBackground
        visible={visible}
        onClick={this.handleModalBackgroundClick}>
        <Modal id='modal'>
          <H1>Novo veículo</H1>
          <Row>
            <Input
              value={vehicle}
              name='vehicle'
              placeholder='Veículo'
              tabIndex={1}
              autoFocus
              onChange={this.handleInputChange}
            />
            <Input
              value={brand}
              name='brand'
              onChange={this.handleInputChange}
              placeholder='Marca'
              tabIndex={2}
            />
          </Row>
          <Row>
            <Input
              value={year}
              name='year'
              onChange={this.handleInputChange}
              placeholder='Ano'
              type='number'
              tabIndex={3}
            />
            <Checkbox
              checked={!!sold}
              text='Vendido'
              onChange={this.handleInputChange}
              name='sold'
              tabIndex={4}
            />
          </Row>

          <Row fullWidth>
            <TextArea
              tabIndex={5}
              value={description}
              placeholder='Descrição'
              rows={5}
              name='description'
              onChange={this.handleInputChange}
            />
          </Row>

          <ModalFooter>
            {!!_id && (
              <Button
                outline
                text='Deletar'
                onClick={() => this.handleRemove(_id)}
              />
            )}
            <Button
              text='Add'
              onClick={
                _id ? () => this.submitEditForm(_id) : this.submitAddForm
              }
            />
            <Button text='Fechar' onClick={onClose} />
          </ModalFooter>
        </Modal>
      </ModalBackground>
    );
  }
}
