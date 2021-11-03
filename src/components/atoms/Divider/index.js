import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Divider = ({type}) => {
  if (type === 'employee') {
    return <View style={styles.containerEmployee} />;
  }
  return <View style={styles.container} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 0.5,
    backgroundColor: '#DEE2E6',
  },
  containerEmployee: {
    width: 0.5,
    backgroundColor: '#DEE2E6',
  },
});
