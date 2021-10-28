import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {ICGoogle} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Button = ({type, title}) => {
  if (type === 'icon') {
    return (
      <TouchableOpacity style={styles.page(type)}>
        <ICGoogle />
        <Gap width={8} />
        <Text style={styles.title(type)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.page(type)}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  page: type => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderColor: '#FFFFFF',
    backgroundColor: type === 'icon' ? colors.primary : '#FFFFFF',
  }),
  title: type => ({
    fontSize: 14,
    color: type === 'icon' ? '#FFFFFF' : '#212529',
    fontFamily: type === 'icon' ? fonts.primary[300] : fonts.primary.normal,
  }),
});
