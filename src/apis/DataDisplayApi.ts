
import axios from 'axios';
import { DataDisplayRequest, DataDisplayResponse } from '../types/Type';

const BASE_URL = 'YOUR_BACKEND_API_BASE_URL';

const DataDisplayApi = {
  fetchDataDisplay: async (): Promise<DataDisplayResponse> => {
    try {
      const response = await axios.get(`${BASE_URL}/data-display`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data display');
    }
  },
};

export default DataDisplayApi;