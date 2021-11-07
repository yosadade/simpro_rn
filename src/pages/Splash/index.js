import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICLogo} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts, getData} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      }, 2000);
    });
  });

  return (
    <View style={styles.page}>
      <View style={styles.icon}>
        <ICLogo />
      </View>
      <Gap width={15} />
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
});
