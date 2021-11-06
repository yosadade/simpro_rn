import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  CheckBox,
  Gap,
  Label,
  Link,
  Select,
  TextInput,
} from '../../components';
import Axios from 'axios';
import {API_HOST, colors, fonts, showMessage} from '../../utils';
import useForm from '../../utils/userForm';
import {useDispatch, useSelector} from 'react-redux';
import {JSONDepartments, JSONRoles} from '../../assets/json';
import {setLoading, signUpAction} from '../../redux/actions';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    role: 'dev',
    department: 'agensi',
    password: '',
  });

  const dispatch = useDispatch();
  const registerReducer = useSelector(state => state.registerReducer);

  const onSubmit = () => {
    // dispatch(setLoading(true));
    const data = {
      ...form,
    };
    console.log(form)
    dispatch(signUpAction(form, navigation));
    Axios.post(`${API_HOST.uri}/users`, data)
      .then(() => {
        dispatch(setLoading(false));
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage(`${err?.message}`);
      });
  };

  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subTitle}>Free access to our dashboard</Text>
          <Gap height={16} />
          <Label title="Full name" />
          <Gap height={8} />
          <TextInput
            placeholder="John doe"
            value={form.value}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={8} />
          <Label title="Email Address" />
          <Gap height={8} />
          <TextInput
            placeholder="email@example.com"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={8} />
          <Label title="Role" />
          <Gap height={8} />
          <Select
            data={JSONRoles}
            value={form.role}
            onSelectChange={value => setForm('role', value)}
          />
          <Gap height={8} />
          <Label title="Department" />
          <Gap height={8} />
          <Select
            data={JSONDepartments}
            value={form.department}
            onSelectChange={value => setForm('department', value)}
          />
          <Gap height={8} />
          <Label title="Password" />
          <Gap height={8} />
          <TextInput
            secureTextEntry
            placeholder="******************"
            value={form.password}
            onChangeText={value => setForm('password', value)}
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
  scrollView: {
    flexGrow: 1,
  },
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
