import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {ICEdit, ICTrash} from '../../../assets';
import {fonts} from '../../../utils';

const Dropdown = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Gifari</Text>
        <Text style={styles.subTitle}>4.000.000</Text>
      </View>
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
  wrapperTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: '#212529',
    fontFamily: fonts.primary[400],
  },
  subTitle: {
    fontSize: 14,
    color: '#9A9B9D',
    fontFamily: fonts.primary[300],
  },
  wrapperBtn: {
    marginLeft: 12,
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
