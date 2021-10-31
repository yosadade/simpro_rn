import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Button, Gap, Link} from '../../components';
import {colors, fonts} from '../../utils';
import {ILVerify} from '../../assets';

const Verification = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperIcon}>
        <ILVerify />
        <Gap height={24} />
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subTitle}>
          We sent a verification code to your email. Enter the code from the
          email in the field below.
        </Text>
        <Gap height={24} />
        <OTPInputView
          style={styles.otpInput}
          pinCount={4}
          //   code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          //   onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>
      <View>
        <Button title="Verify my account" />
        <Gap height={24} />
        <View style={styles.wrapperLink}>
          <Text style={styles.titleOr}>Haven't received it? </Text>
          <Link title="Resend a new code" onPress={() => {}} />
        </View>
        <Gap height={24} />
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperIcon: {
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
  wrapperLink: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleOr: {
    fontSize: 15,
    fontFamily: fonts.primary[300],
    color: '#9A9B9D',
  },
  otpInput: {
    width: 250,
    height: 100,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: '#F19828',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: '#F19828',
  },
});
