/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {StyleSheet, View, TextInput as TextInputRN} from 'react-native';
import {fonts} from '../../../utils';

const TextInput = ({
  placeholder,
  title,
  disable,
  secureTextEntry,
  type,
  ...restProps
}) => {
  return (
    <View style={styles.container}>
      <TextInputRN
        style={styles.input}
        editable={!disable}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
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
});
