import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  CardDeveloper,
  CardFinance,
  CardProjectActive,
  CardProjectProgress,
  Gap,
  Profile,
} from '../../components';
import {getProjectData} from '../../redux/actions';

const Dashboard = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProjectData());
    setRefreshing(false);
  };

  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Profile onPress={() => navigation.navigate('Profile')}/>
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
