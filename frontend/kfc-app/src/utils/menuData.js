import axios from 'axios';
import { API_BASE_URL } from './api';

export const getMenuItems = async (type) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/product/menu`, {
      params: { type },
      timeout: 5000,
    });
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`Could not load ${type} menu items from the API.`, error);
    return [];
  }
};

export const searchMenuItems = async (query) => {
  const search = query.trim();
  if (!search) return [];

  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/searchapi/item`, {
      params: { search },
      timeout: 5000,
    });
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Could not search menu items from the API.', error);
    return [];
  }
};