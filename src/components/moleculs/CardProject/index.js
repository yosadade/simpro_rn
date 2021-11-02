import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider, Gap, ProgressBar} from '../..';
import {
  ICBag,
  ICCLock,
  ICDollar,
  ICEdit,
  ICHourGlass,
  ICStatus,
  ICTrash,
  ILProfile,
} from '../../../assets';
import {fonts} from '../../../utils';

const CardProject = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Alusio</Text>
        <View style={styles.wrapperBtn}>
          <TouchableOpacity style={styles.btn}>
            <ICEdit />
          </TouchableOpacity>
          <Gap width={8} />
          <TouchableOpacity style={styles.btn}>
            <ICTrash />
          </TouchableOpacity>
        </View>
      </View>
      <Gap height={12} />
      <View style={styles.wrapperProfile}>
        <View style={styles.wrapperImage}>
          <Image source={ILProfile} style={styles.image} />
        </View>
        <View style={styles.wrapperImageSecond}>
          <Image source={ILProfile} style={styles.image} />
        </View>
      </View>
      <Gap height={12} />
      <View style={styles.wrapper}>
        <View style={styles.wrapper}>
          <ICDollar />
          <Gap width={4} />
          <Text style={styles.title}>IDR. 12.000.000</Text>
        </View>
        <View style={styles.wrapper}>
          <ICBag />
          <Gap width={4} />
          <Text style={styles.title}>Projectly</Text>
        </View>
      </View>
      <Gap height={12} />
      <View style={styles.wrapper}>
        <View style={styles.wrapper}>
          <ICStatus />
          <Gap width={4} />
          <Text style={styles.title}>On Going</Text>
        </View>
        <View style={styles.wrapper}>
          <ICHourGlass />
          <Gap width={4} />
          <Text style={styles.title}>4 month</Text>
        </View>
      </View>
      <Gap height={24} />
      <Divider />
      <Gap height={12} />
      <View style={styles.wrapper}>
        <Text style={styles.label}>Progress</Text>
        <View style={styles.badge}>
          <ICCLock />
          <Gap width={4} />
          <Text style={styles.title}>35 Days Left</Text>
        </View>
      </View>
      <Gap height={12} />
      <ProgressBar color="#F19828" />
    </TouchableOpacity>
  );
};

export default CardProject;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginHorizontal: 24,
    paddingVertical: 24,
    paddingHorizontal: 12,
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
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  wrapperImage: {
    backgroundColor: '#FFFFFF',
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  image: {
    backgroundColor: '#FFFFFF',
    width: 22,
    height: 22,
    borderRadius: 22,
  },
  wrapperProfile: {
    flexDirection: 'row',
  },
  wrapperImageSecond: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: 13,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#212529',
  },
  badge: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#F1C8DB',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
