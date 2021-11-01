/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {ICSearch} from '../../../assets';
import {fonts} from '../../../utils';

const SearchBar = ({
  placeholder,
  title,
  disable,
  secureTextEntry,
  type,
  ...restProps
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        editable={!disable}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.input}
      />
      <TouchableOpacity style={styles.icon}>
        <ICSearch />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  icon: {
    position: 'absolute',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    left: 30,
    bottom: 7,
  },
  input: {
    fontFamily: fonts.primary[300],
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    paddingVertical: 11,
    paddingHorizontal: 16,
    paddingLeft: 48,
    marginTop: 8,
    borderWidth: 0,
    textAlignVertical: 'center',
  },
});
