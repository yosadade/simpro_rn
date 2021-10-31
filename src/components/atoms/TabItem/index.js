import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import { ICEmployee, ICEmployeeActive, ICHome, ICHomeActive, ICProject, ICProjectActive } from '../../../assets';
import { fonts } from '../../../utils';

const TabItems = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = ({}) => {
    switch (label) {
      case 'Dashboard':
        return isFocused ? <ICHomeActive /> : <ICHome />;
      case 'Project':
        return isFocused ? <ICProjectActive /> : <ICProject />;
      case 'Employee':
        return isFocused ? <ICEmployeeActive /> : <ICEmployee />;
      default:
        break;
    }
    return <ICProject />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? '#F19828' : '#FFFFFF',
    fontSize: 14,
    fontFamily: fonts.primary[400],
    marginTop: 4,
  }),
});