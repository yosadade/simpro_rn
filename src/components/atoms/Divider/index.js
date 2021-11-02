import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Divider = () => {
  return <View style={styles.container} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 0.5,
    backgroundColor: '#DEE2E6',
  },
});
