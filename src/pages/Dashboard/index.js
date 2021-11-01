import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  CardDeveloper,
  CardFinance,
  CardProjectActive,
  CardProjectProgress,
  Gap,
  Profile,
} from '../../components';

const Dashboard = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile />
        <Gap height={24} />
        <CardProjectProgress />
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
