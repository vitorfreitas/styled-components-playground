import api from './config';

export const createVehicle = async vehicle => {
  const response = await api.post('/products', { ...vehicle });
  return response.data;
};

export const getAllVehicles = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const updateVehicle = async (id, vehicle) => {
  const response = await api.put(`/products/${id}`, { ...vehicle });
  return response.data;
};

export const removeVehicle = async id => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};
