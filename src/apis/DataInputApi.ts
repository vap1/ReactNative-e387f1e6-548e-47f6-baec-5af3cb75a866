
import axios from 'axios';
import { DataInputRequest, DataInputResponse } from '../types/Type';

const BASE_URL = 'YOUR_BACKEND_API_BASE_URL';

const DataInputApi = {
  postDataInput: async (dataInputRequest: DataInputRequest): Promise<DataInputResponse> => {
    try {
      const response = await axios.post(`${BASE_URL}/data-input`, dataInputRequest);
      return response.data;
    } catch (error) {
      throw new Error('Failed to submit data input');
    }
  },
};

export default DataInputApi;