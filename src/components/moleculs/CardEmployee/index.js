import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider, Gap} from '../..';
import {ICBuilding, ICClipboardPink, ILProfile} from '../../../assets';
import {fonts} from '../../../utils';

const CardEmployee = ({
  onPress,
  id,
  name,
  role,
  status,
  department,
  noWa,
  start,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapperRole}>
        <View style={styles.wrapperImage}>
          <Image source={ILProfile} style={styles.image} />
        </View>
        <Gap height={12} />
        <Text style={styles.role}>{role}</Text>
        <Gap height={4} />
        <Text style={styles.id}>Employee id : 000{id}</Text>
      </View>
      <Gap width={24} />
      <View style={styles.detail}>
        <Text style={styles.name}>{name}</Text>
        <Gap height={6} />
        <View style={styles.badges}>
          <Text style={styles.role}>{status ? 'ACTIVE' : 'NOT ACTIVE'}</Text>
        </View>
        <Gap height={12} />
        <Divider />
        <Gap height={12} />
        <View style={styles.wrapper}>
          <ICBuilding />
          <Gap width={4} />
          <Text style={styles.title}>{department}</Text>
        </View>
        <Gap height={6} />
        <View style={styles.wrapper}>
          <ICClipboardPink />
          <Gap width={4} />
          <Text style={styles.title}>{noWa}</Text>
        </View>
        <Gap height={12} />
        <View style={styles.wrapper}>
          <ICBuilding />
          <Gap width={4} />
          <Text style={styles.title}>{start}</Text>
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
    alignItems: 'center',
  },
  wrapperRole: {
    alignItems: 'center',
    justifyContent: 'space-between',
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
    borderLeftWidth: 0.5,
    paddingLeft: 24,
    borderColor: '#DEE2E6',
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
    textTransform: 'capitalize',
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
    textTransform: 'capitalize',
  },
});
