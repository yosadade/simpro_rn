import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, CheckBox, Gap, Label, Link, TextInput} from '../../components';
import {setLoading, signInAction} from '../../redux/actions';
import {colors, fonts} from '../../utils';
import useForm from '../../utils/userForm';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setLoading(true));
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <View>
        <Gap height={24} />
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subTitle}>Free access to our dashboard</Text>
        <Gap height={16} />
        <Button type="icon" title="Sign In with Google" />
        <Gap height={48} />
        <View style={styles.wrapperOr}>
          <View style={styles.divider} />
          <Text style={styles.titleOr}>OR</Text>
          <View style={styles.divider} />
        </View>
      </View>

      <View>
        <Label title="Email Address" />
        <Gap height={8} />
        <TextInput
          placeholder="name@example.com"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={8} />
        <Label
          title="Password"
          subTitle="Forgot Password"
          type="password"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <Gap height={8} />
        <TextInput
          placeholder="********************"
          value={form.password}
          onChangeText={value => setForm('password', value)}
        />
        <Gap height={8} />
        <View style={styles.wrapperCheck}>
          <CheckBox />
          <Gap width={6} />
          <Label title="Remember me" />
        </View>
        <Gap height={48} />
        <Button title="Sign In" onPress={onSubmit} />
      </View>

      <View>
        <View style={styles.wrapperLink}>
          <Text style={styles.titleOr}>Don't have an account yet? </Text>
          <Link
            title="Sign up here"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <Gap height={24} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
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
  wrapperOr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: 1,
    width: '40%',
    backgroundColor: '#FFFFFF',
  },
  titleOr: {
    fontSize: 15,
    fontFamily: fonts.primary[300],
    color: '#9A9B9D',
  },
  wrapperCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconChecklist: {
    width: 15,
    height: 15,
    backgroundColor: '#FFFFFF',
    top: 3,
  },
  wrapperLink: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
