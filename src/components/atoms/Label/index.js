import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';

const Label = ({title, subTitle, type, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {type === 'password' && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    marginTop: 7,
    color: '#F8F9FA',
    fontFamily: fonts.primary[300],
  },
  subTitle: {
    fontSize: 15,
    marginTop: 7,
    color: '#F19828',
    fontFamily: fonts.primary[300],
  },
});
