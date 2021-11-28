/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {Gap} from '..';
import {fonts} from '../../../utils';

const FileUpload = ({onChangeText, fileName = 'No file chosen'}) => {
  return (
    <TouchableOpacity style={styles.input} onPress={onChangeText}>
      <TouchableOpacity>
        <Text style={styles.title}>Choose Files</Text>
      </TouchableOpacity>
      <Gap width={8} />
      <View style={styles.divider} />
      <Gap width={8} />
      <Text style={styles.subTitle}>
        {fileName === '' || fileName === null ? 'No file chosen' : fileName}
      </Text>
    </TouchableOpacity>
  );
};

export default FileUpload;

const styles = StyleSheet.create({
  container: {},
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    paddingVertical: 17,
    paddingHorizontal: 16,
    marginTop: 8,
    borderWidth: 0,
    textAlignVertical: 'center',
  },
  divider: {
    backgroundColor: '#212529',
    height: '100%',
    width: 0.5,
  },
  title: {
    fontSize: 13,
    color: '#212529',
    fontFamily: fonts.primary[400],
  },
  subTitle: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
  },
});
