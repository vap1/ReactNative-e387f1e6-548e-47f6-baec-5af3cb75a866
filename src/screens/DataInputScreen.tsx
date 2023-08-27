
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { DataInputRequest } from '../apis/DataInputApi';
import { User } from '../types/Type';

const DataInputScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleDataInput = () => {
    const user: User = {
      userId: '', // Set the userId if required
      firstName,
      lastName,
      email,
      phone,
      address,
    };

    const request: DataInputRequest = {
      user,
    };

    // Call the data input API here using the DataInputApi.ts file

    // Display a confirmation message
    Alert.alert('Data Input', 'Data submitted successfully!');
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
      <Button title="Submit" onPress={handleDataInput} />
    </View>
  );
};

export default DataInputScreen;