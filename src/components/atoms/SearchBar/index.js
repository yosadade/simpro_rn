/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Gap} from '..';
import {ICPlusCircle, ICSearch} from '../../../assets';
import {colors, fonts} from '../../../utils';

const SearchBar = ({
  placeholder,
  title,
  disable,
  secureTextEntry,
  type,
  onCreate,
  onSearch,
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
        onChangeText={onSearch}
      />
      <TouchableOpacity style={styles.icon}>
        <ICSearch />
      </TouchableOpacity>
      <Gap width={12} />
      <TouchableOpacity style={styles.btn} onPress={onCreate}>
        <ICPlusCircle />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
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
    width: '85%',
    fontFamily: fonts.primary[300],
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    paddingVertical: 11,
    paddingHorizontal: 16,
    paddingLeft: 48,
    // marginTop: 8,
    borderWidth: 0,
    textAlignVertical: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: '13%',
    padding: 14,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});
