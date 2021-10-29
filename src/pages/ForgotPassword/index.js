import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Button, Gap, Label, Link, TextInput} from '../../components';
import {colors, fonts} from '../../utils';
import {ILForgotPassword} from '../../assets';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperIcon}>
        <Gap height={24} />
        <View style={styles.ilustration}>
          <ILForgotPassword />
        </View>
        <Gap height={24} />
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subTitle}>
          Enter the email address you used when you joined and we'll send you
          instructions to reset your password.
        </Text>
      </View>
      <View>
        <Label title="Email address" />
        <Gap height={8} />
        <TextInput placeholder="name@example.com" />
      </View>
      <View>
        <Button title="Submit" />
        <Gap height={24} />
        <View style={styles.Link}>
          <Link title="Resend a new code" onPress={() => {}} />
        </View>
        <Gap height={24} />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 24,
    justifyContent: 'space-between',
  },
  wrapperIcon: {},
  ilustration: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#F8F9FA',
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
  },
  subTitle: {
    fontSize: 15,
    marginTop: 7,
    color: '#F8F9FA',
    textAlign: 'center',
    fontFamily: fonts.primary[300],
  },
  form: {
    alignItems: 'flex-start',
  },
  Link: {
    alignItems: 'center',
  },
});
