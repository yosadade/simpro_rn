import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap} from '..';
import {ICNotification, ILProfile} from '../../../assets';
import {fonts, getData} from '../../../utils';

const Profile = ({type}) => {
  const [names, setNames] = useState('Name');
  const [roles, setRoles] = useState('role');
  const [emails, setEmails] = useState('email');

  useEffect(() => {
    getData('userProfile')
      .then(res => {
        const {name, role, email} = res;
        setNames(name);
        setRoles(role);
        setEmails(email);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.wrapperProfile}>
          <Image source={ILProfile} style={styles.image} />
        </View>
        <Gap width={8} />
        <View style={styles.wrapperName}>
          <Text style={styles.name}>{names}</Text>
          <Text style={styles.role}>{type === 'profile' ? emails : roles}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.icon}>
        <ICNotification />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
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
    textTransform: 'capitalize',
  },
  role: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: fonts.primary.normal,
    color: '#212529',
    textTransform: 'capitalize',
  },
  icon: {
    padding: 12,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
