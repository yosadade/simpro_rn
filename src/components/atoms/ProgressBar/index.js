import React from 'react';
import {StyleSheet, View} from 'react-native';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 5,
    borderRadius: 4,
    backgroundColor: '#F0F0F0',
  },
  progressBar: {
    width: '90%',
    height: 5,
    borderRadius: 4,
    paddingHorizontal: 24,
    backgroundColor: '#A8D7E0',
  },
});
