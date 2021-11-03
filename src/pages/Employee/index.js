import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardEmployee, Gap, Profile, SearchBar} from '../../components';

const Employee = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Profile />
      <Gap height={24} />
      <SearchBar placeholder="Search" />
      <Gap height={24} />
      <CardEmployee onPress={() => navigation.navigate('DetailEmployee')} />
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
