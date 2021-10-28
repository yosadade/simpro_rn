import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Simpro</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    color: '#FFFFFF',
    fontFamily: fonts.primary[700],
  },
});
