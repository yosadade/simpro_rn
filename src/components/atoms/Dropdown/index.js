import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap, Label} from '..';
import {ICEdit, ICTrash} from '../../../assets';

const Dropdown = () => {
  return (
    <View style={styles.container}>
      <Label type="project" title="Gifari" subTitle="4.800.000" />
      <View style={styles.wrapperBtn}>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <ICEdit />
        </TouchableOpacity>
        <Gap width={8} />
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <ICTrash />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderColor: '#DEE2E6',
    borderTopWidth: 0.5,
    marginTop: 12,
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
});
