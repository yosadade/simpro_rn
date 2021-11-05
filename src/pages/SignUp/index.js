import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, CheckBox, Gap, Label, Link, TextInput} from '../../components';
import {colors, fonts} from '../../utils';
import useForm from '../../utils/userForm';
import {useDispatch} from 'react-redux';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    role: '',
    department: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_REGISTER', value: form});
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subTitle}>Free access to our dashboard</Text>
          <Gap height={16} />
          <Label title="Full name" />
          <Gap height={8} />
          <TextInput
            placeholder="John doe"
            value={form.value}
            onChange={value => setForm('name', value)}
          />
          <Gap height={8} />
          <Label title="Email Address" />
          <Gap height={8} />
          <TextInput
            placeholder="email@example.com"
            value={form.email}
            onChange={value => setForm('email', value)}
          />
          <Gap height={8} />
          <Label title="Role" />
          <Gap height={8} />
          <TextInput
            placeholder=""
            value={form.role}
            onChange={value => setForm('role', value)}
          />
          <Gap height={8} />
          <Label title="Department" />
          <Gap height={8} />
          <TextInput
            placeholder=""
            value={form.department}
            onChange={value => setForm('department', value)}
          />
          <Gap height={8} />
          <Label title="Password" />
          <Gap height={8} />
          <TextInput
            secureTextEntry
            placeholder="******************"
            value={form.password}
            onChange={value => setForm('password', value)}
          />
          <Gap height={8} />
          <View style={styles.wrapperCheck}>
            <CheckBox />
            <Gap width={6} />
            <Label title="I accepted the " />
            <Label type="password" subTitle="Termns and Conditions" />
          </View>
          <Gap height={48} />
          <Button title="Sign Up" onPress={onSubmit} />
        </View>

        <View style={styles.wrapperLink}>
          <Text style={styles.titleOr}>Don't have an account yet? </Text>
          <Link
            title="Sign in here"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </ScrollView>
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
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
