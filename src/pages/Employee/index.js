import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Profile } from '../../components';

const Employee = () => {
  return (
    <View style={styles.page}>
      <Profile />
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9FBFD',
  }
});
