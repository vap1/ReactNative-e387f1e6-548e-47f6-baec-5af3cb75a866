
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { User } from '../types/Type';
import { getDataDisplay } from '../apis/DataDisplayApi';
import UserDetailsList from '../components/UserDetailsList';
import SearchBar from '../components/SearchBar';

const DataDisplayScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchResults, setSearchResults] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getDataDisplay();
      setUsers(response.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (keyword: string) => {
    const results = users.filter((user) =>
      user.firstName.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <View>
      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <UserDetailsList users={searchResults} />
      ) : (
        <UserDetailsList users={users} />
      )}
    </View>
  );
};

export default DataDisplayScreen;