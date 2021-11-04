import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Gap} from '..';
import {ICGoogle} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Button = ({type, title, onPress, bgColor = colors.primary}) => {
  if (type === 'modal') {
    return (
      <TouchableOpacity style={styles.page(type, bgColor)} onPress={onPress}>
        <Text style={styles.title(type)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'icon') {
    return (
      <TouchableOpacity style={styles.page(type)} onPress={onPress}>
        <ICGoogle />
        <Gap width={8} />
        <Text style={styles.title(type)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.page(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  page: (type, bgColor) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    paddingHorizontal: type === 'modal' ? 12 : 16,
    paddingVertical: type === 'modal' ? 6 : 11,
    borderColor: '#FFFFFF',
    backgroundColor:
      type === 'icon' ? colors.primary : type === 'modal' ? bgColor : '#FFFFFF',
  }),
  title: type => ({
    fontSize: 14,
    color: type === 'icon' || type === 'modal' ? '#FFFFFF' : '#212529',
    fontFamily:
      type === 'icon' || type === 'modal'
        ? fonts.primary[300]
        : fonts.primary.normal,
  }),
});
