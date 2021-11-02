import React from 'react';
import {StyleSheet, View} from 'react-native';

const colors = ['#EEE5FF', '#A8D7E0', '#A0D9B4', '#FFAA8A', '#FFE28C'];
const random = Math.floor(Math.random() * colors.length);

const ProgressBar = ({color = '#F0F0F0', progress = '0%'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar(color, progress)} />
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
  progressBar: (color, progress) => ({
    width: progress,
    height: 5,
    borderRadius: 4,
    paddingHorizontal: 24,
    backgroundColor: color,
  }),
});
