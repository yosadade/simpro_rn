import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../utils';
import {CardFinance, Gap, Label, Profile} from '../../components';

const Dashboard = () => {
  return (
    <View style={styles.page}>
      <Profile />
      <Gap height={24} />
      <CardFinance />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9FBFD',
  },
});
