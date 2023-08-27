
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { SearchRequest } from '../types/Type';
import { search } from '../apis/SearchApi';

interface SearchBarProps {
  onSearch: (results: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = async () => {
    try {
      const request: SearchRequest = {
        keyword: keyword,
      };

      const response = await search(request);
      onSearch(response.searchResults);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;