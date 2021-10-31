import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap} from '..';
import {ICNotification, ILProfile} from '../../../assets';
import {fonts} from '../../../utils';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.wrapperProfile}>
          <Image source={ILProfile} style={styles.image} />
        </View>
        <Gap width={8} />
        <View style={styles.wrapperName}>
          <Text style={styles.name}>Dylan Hunter</Text>
          <Text style={styles.role}>Project Manager</Text>
        </View>
      </View>
      <TouchableOpacity>
        <ICNotification />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 24
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperProfile: {
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 56,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46,
  },
  wrapperName: {
    marginRight: 8,
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.primary[700],
    color: '#212529',
  },
  role: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: fonts.primary.normal,
    color: '#212529',
  },
});
