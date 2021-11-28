/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {
  StyleSheet,
  TextInput as TextInputRN,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICCalendar} from '../../../assets';
import {fonts} from '../../../utils';

const TextInput = ({
  placeholder,
  title,
  disable,
  secureTextEntry,
  type,
  value,
  onChangeText,
  keyboardType,
  onPress,
  date,
  ...restProps
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TextInputRN
        keyboardType={keyboardType}
        style={styles.input}
        editable={!disable}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        disable={disable}
        {...restProps}
      />
      <View style={styles.icon}>{date && <ICCalendar />}</View>
    </TouchableOpacity>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    fontFamily: fonts.primary[300],
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    paddingVertical: 11,
    paddingHorizontal: 16,
    marginTop: 8,
    borderWidth: 0,
    textAlignVertical: 'center',
  },
  icon: {
    position: 'absolute',
    top: 21,
    right: 16,
  },
});
