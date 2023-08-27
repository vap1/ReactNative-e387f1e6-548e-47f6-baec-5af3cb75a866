
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { SearchRequest, SearchResponse } from '../types/Type';
import SearchApi from '../apis/SearchApi';

const SearchBar: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResponse[]>([]);

  const handleSearch = async () => {
    const searchRequest: SearchRequest = {
      keyword,
    };

    try {
      const response = await SearchApi.searchKeyword(searchRequest);
      setSearchResults(response.searchResults);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={handleSearch} />
      {/* Display search results */}
      {searchResults.map((result, index) => (
        <View key={index}>
          <Text>{result.userId}</Text>
          <Text>{result.firstName}</Text>
          <Text>{result.lastName}</Text>
          <Text>{result.email}</Text>
          <Text>{result.phone}</Text>
          <Text>{result.address}</Text>
        </View>
      ))}
    </View>
  );
};

export default SearchBar;