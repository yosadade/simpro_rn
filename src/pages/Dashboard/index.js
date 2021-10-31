import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../utils';
import {CardDeveloper, CardFinance, CardOnGoing, CardProjectActive, Gap, Label, Profile} from '../../components';

const Dashboard = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Profile />
      <Gap height={24} />
      <CardFinance />
      <Gap height={24} />
      <CardDeveloper />
      <Gap height={24} />
      <CardProjectActive />
      <Gap height={24} />
      </ScrollView>
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
