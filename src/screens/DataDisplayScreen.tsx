
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { User, DataDisplayResponse } from '../types/Type';
import DataDisplayApi from '../apis/DataDisplayApi';

const DataDisplayScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchDataDisplay();
  }, []);

  const fetchDataDisplay = async () => {
    try {
      const response: DataDisplayResponse = await DataDisplayApi.fetchDataDisplay();
      setUsers(response.users);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <View>
      {users.map((user, index) => (
        <View key={index}>
          <Text>{user.userId}</Text>
          <Text>{user.firstName}</Text>
          <Text>{user.lastName}</Text>
          <Text>{user.email}</Text>
          <Text>{user.phone}</Text>
          <Text>{user.address}</Text>
        </View>
      ))}
    </View>
  );
};

export default DataDisplayScreen;