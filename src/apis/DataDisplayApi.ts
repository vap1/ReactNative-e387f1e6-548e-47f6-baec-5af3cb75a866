
import axios from 'axios';
import { DataDisplayRequest, DataDisplayResponse } from '../types/Type';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const getDataDisplay = async (): Promise<DataDisplayResponse> => {
  try {
    const response = await axios.get<DataDisplayResponse>(`${BASE_URL}/data-display`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data display');
  }
};