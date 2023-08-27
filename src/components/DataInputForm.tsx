
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { DataInputRequest } from '../types/Type';
import { DataInputApi } from '../apis/DataInputApi';

const DataInputForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleFormSubmit = async () => {
    try {
      const requestData: DataInputRequest = {
        user: {
          firstName,
          lastName,
          email,
          phone,
          address,
        },
      };

      // Make API call to submit data
      const response = await DataInputApi.submitData(requestData);

      // Display success message
      Alert.alert('Success', 'Data submitted successfully');
    } catch (error) {
      // Display error message
      Alert.alert('Error', 'Failed to submit data');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
};

export default DataInputForm;