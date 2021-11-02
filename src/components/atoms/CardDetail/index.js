import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Label} from '..';
import {Gap} from '../..';
import {ICEdit, ICEditDetail} from '../../../assets';
import {fonts} from '../../../utils';

const CardDetail = ({
  onPress,
  label,
  title1,
  title2,
  title3,
  title4,
  value1,
  value2,
  value3,
  value4,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity style={styles.btn}>
          <ICEditDetail />
        </TouchableOpacity>
      </View>
      <Gap height={12} />
      <Label type="project" title={title1} subTitle={value1} />
      <Label type="project" title={title2} subTitle={value2} />
      <Label type="project" title={title3} subTitle={value3} />
      <Label type="project" title={title4} subTitle={value4} />
    </TouchableOpacity>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginHorizontal: 24,
    padding: 12,
    borderRadius: 4,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  label: {
    fontSize: 16,
    color: '#212529',
    fontFamily: fonts.primary[700],
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  wrapperLabel: {
    paddingVertical: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[700],
    color: '#212529',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#9A9B9D',
  },
});
