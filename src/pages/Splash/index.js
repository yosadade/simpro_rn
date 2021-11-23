import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {version} from '../../../package.json';
import {ICLogo} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts, getData} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    getData('token').then(res => {
      if (res) {
        setTimeout(() => {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        }, 1500);
      } else {
        setTimeout(() => {
          navigation.replace('SignIn');
        }, 1500);
      }
    });
  }, [navigation]);

  return (
    <View style={styles.page}>
      <View style={styles.wraperIcon}>
        <View style={styles.icon}>
          <ICLogo />
        </View>
        <Gap width={15} />
        <Text style={styles.title}>Simpro</Text>
      </View>
      <Text style={styles.version}>V.{version}</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingVertical: 24,
  },
  wraperIcon: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 76,
    height: 76,
    borderRadius: 76,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    color: '#FFFFFF',
    fontFamily: fonts.primary[700],
  },
  version: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: fonts.primary[400],
  },
});
