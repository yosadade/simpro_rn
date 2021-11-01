import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Gap, Profile, SearchBar} from '../../components';

const Project = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile />
        <SearchBar placeholder="Search"/>
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
