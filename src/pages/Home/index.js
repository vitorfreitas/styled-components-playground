import React, { Fragment } from 'react';

import { HomeSection, VehiclesSection } from './style';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import VehiclesList from '../../components/VehiclesList';
import VehicleDescription from '../../components/VehicleDescription';
import VehicleModal from '../../components/VehicleModal';
import { getAllVehicles } from '../../services/vehicles';

export default class Home extends React.Component {
  state = {
    modalType: null,
    vehicles: null,
    selectedVehicle: null
  };

  componentDidMount() {
    this.fetchVehiclesAndUpdate();
  }

  fetchVehiclesAndUpdate = async () => {
    const vehicles = await getAllVehicles();

    this.setState({
      vehicles,
      selectedVehicle: vehicles[0]
    });
  };

  showVehicleDetail = vehicle => {
    this.setState({ selectedVehicle: vehicle });
  };

  handleAddFormSubmit = vehicle => {
    this.fetchVehiclesAndUpdate();

    this.setState({
      modalType: null
    });
  };

  render() {
    const { modalType, selectedVehicle, vehicles } = this.state;
    return (
      <Fragment>
        <Navigation />

        <HomeSection>
          <Header onClick={() => this.setState({ modalType: 'add' })} />
          {vehicles && vehicles.length > 0 && (
            <VehiclesSection>
              <VehiclesList
                vehicles={vehicles}
                selectedVehicle={selectedVehicle}
                handleItemClick={this.showVehicleDetail}
              />
              <VehicleDescription
                vehicle={selectedVehicle}
                onEdit={() => this.setState({ modalType: 'edit' })}
              />
            </VehiclesSection>
          )}
        </HomeSection>

        {!!modalType && (
          <VehicleModal
            visible={!!modalType}
            vehicle={modalType === 'edit' && selectedVehicle}
            onClose={() => this.setState({ modalType: null })}
            onSuccess={this.handleAddFormSubmit}
          />
        )}
      </Fragment>
    );
  }
}
