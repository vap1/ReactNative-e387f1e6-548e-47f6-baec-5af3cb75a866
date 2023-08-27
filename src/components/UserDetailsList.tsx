
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { User } from '../types/Type';
import { getDataDisplay } from '../apis/DataDisplayApi';

const UserDetailsList: React.FC = () => {
  const [userDetails, setUserDetails] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getDataDisplay();
      setUserDetails(response.users);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const renderUserDetails = ({ item }: { item: User }) => (
    <View>
      <Text>{item.firstName} {item.lastName}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Address: {item.address}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={userDetails}
        renderItem={renderUserDetails}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
};

export default UserDetailsList;