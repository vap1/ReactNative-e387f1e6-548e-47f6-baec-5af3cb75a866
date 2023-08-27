
import axios from 'axios';
import { SearchRequest, SearchResponse } from '../types/Type';

const BASE_URL = 'YOUR_BACKEND_API_BASE_URL';

const SearchApi = {
  searchKeyword: async (keyword: string): Promise<SearchResponse> => {
    try {
      const response = await axios.get(`${BASE_URL}/search/${keyword}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to search for keyword');
    }
  },
};

export default SearchApi;