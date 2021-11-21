import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICEditBack,
  ICLanguage,
  ICMode,
  ICSignOut,
  ICStar,
  ICUserPlus,
} from '../../assets';
import {CustomModal, Profile as Profiles} from '../../components';
import {fonts} from '../../utils';

const Profile = () => {
  const {modalSignOut, setModalSignOut} = useState(false);
  return (
    <>
      <View style={styles.pages}>
        <Profiles type="profile" />
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
            <Text style={styles.title}>Light Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <ICStar />
            <Text style={styles.title}>Rate App</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <ICSignOut />
            <Text style={styles.title}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      {modalSignOut && (
        <CustomModal
          label="Delete item Permanently?"
          title="You can only delete this item permanently"
          icon={<ICTrashBig />}
          isVisible={modalSignOut}
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
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 24,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 14,
    color: '#212529',
    fontFamily: fonts.primary[400],
    marginLeft: 12,
  },
});
