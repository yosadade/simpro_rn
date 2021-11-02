import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {CardProject, Gap, Profile, SearchBar} from '../../components';

const Project = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile />
        <Gap height={12} />
        <SearchBar placeholder="Search" />
        <Gap height={24} />
        <CardProject onPress={() => navigation.navigate('DetailProject')} />
      </ScrollView>
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9FBFD',
  },
});
