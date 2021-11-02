import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';

const Label = ({title, subTitle, type, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title(type)}>{title}</Text>
      {type === 'password' && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.subTitle(type)}>{subTitle}</Text>
        </TouchableOpacity>
      )}
      {type === 'project' && (
        <Text style={styles.subTitle(type)}>{subTitle}</Text>
      )}
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: type => ({
    fontSize: type === 'project' ? 14 : 15,
    marginTop: 7,
    color: type === 'project' ? '#212529' : '#F8F9FA',
    fontFamily: type === 'project' ? fonts.primary[400] : fonts.primary[300],
  }),
  subTitle: type => ({
    fontSize: type === 'project' ? 14 : 15,
    marginTop: type === 'project' ? 0 : 7,
    color: type === 'project' ? '#9A9B9D' : '#F19828',
    fontFamily: fonts.primary[300],
  }),
});
