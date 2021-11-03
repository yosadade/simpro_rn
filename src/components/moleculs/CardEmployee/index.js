import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider, Gap} from '../..';
import {ICBuilding, ICClipboardPink, ICCLock, ILProfile} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardEmployee = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapperRole}>
        <View style={styles.wrapperImage}>
          <Image source={ILProfile} style={styles.image} />
        </View>
        <Gap height={12} />
        {/* <View style={styles.badge}> */}
        <Text style={styles.role}>Project Manager</Text>
        <Gap height={4} />
        <Text style={styles.id}>Employee id : 0001</Text>
        {/* </View> */}
      </View>
      <Gap width={24} />
      <Divider type="employee" />
      <Gap width={24} />
      <View style={styles.detail}>
        <Text style={styles.name}>Luke Short</Text>
        <Gap height={6} />
        <View style={styles.badges}>
          <Text style={styles.role}>Woowa</Text>
        </View>
        <Gap height={12} />
        <Divider />
        <Gap height={12} />
        <View style={styles.wrapper}>
          <ICBuilding />
          <Gap width={4} />
          <Text style={styles.title}>Agency</Text>
        </View>
        <Gap height={6} />
        <View style={styles.wrapper}>
          <ICClipboardPink />
          <Gap width={4} />
          <Text style={styles.title}>1.5 Years</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardEmployee;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 24,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#DEE2E6',
  },
  wrapperRole: {
    alignItems: 'center',
  },
  wrapperImage: {
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  detail: {
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.primary[700],
    color: '#212529',
  },
  badge: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#A0D9B4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badges: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#A0D9B4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  role: {
    fontSize: 11,
    fontFamily: fonts.primary[700],
    color: '#212529',
  },
  id: {
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: '#9A9B9D',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: '#212529',
  },
});
