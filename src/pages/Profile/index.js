import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {
  ICEditBack,
  ICLanguage,
  ICMode,
  ICSignOut,
  ICStar,
  ICSignOutBig,
  ICUserPlus,
} from '../../assets';
import {CustomModal, Gap, Profile as Profiles} from '../../components';
import {fonts} from '../../utils';

const Profile = ({navigation}) => {
  const [modalSignOut, setModalSignOut] = useState(false);

  const colorScheme = useColorScheme();

  const onSignOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };

  return (
    <>
      <View style={styles.pages}>
        <Profiles type="profile" />
        <Gap height={24} />
        <View style={styles.content}>
          <TouchableOpacity style={styles.menu}>
            <ICEditBack />
            <Text style={styles.title}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <ICUserPlus />
            <Text style={styles.title}>Add Personal Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <ICLanguage />
            <Text style={styles.title}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <ICMode />
            <Text style={styles.title}>{colorScheme} Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <ICStar />
            <Text style={styles.title}>Rate App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => setModalSignOut(true)}>
            <ICSignOut />
            <Text style={styles.title}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      {modalSignOut && (
        <CustomModal
          label="Sign Out?"
          title="Are you sure you want to exit the app?"
          icon={<ICSignOutBig />}
          isVisible={modalSignOut}
          onSubmit={onSignOut}
          onBackdropPress={() => setModalSignOut(!modalSignOut)}
        />
      )}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: '#F9FBFD',
  },
  content: {
    padding: 24,
    paddingVertical: 0,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  title: {
    fontSize: 14,
    color: '#212529',
    fontFamily: fonts.primary[400],
    marginLeft: 12,
    textTransform: 'capitalize',
  },
});
