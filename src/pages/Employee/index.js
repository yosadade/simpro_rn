import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardEmployee, Gap, Profile, SearchBar} from '../../components';

const Employee = () => {
  return (
    <View style={styles.page}>
      <Profile />
      <Gap height={24} />
      <SearchBar placeholder="Search" />
      <Gap height={24} />
      <CardEmployee />
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9FBFD',
  },
});
