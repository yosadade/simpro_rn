/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, FileUpload, Gap, Label, Select, TextInput} from '../..';
import DocumentPicker from 'react-native-document-picker';
import {ICCancel} from '../../../assets';
import {colors, fonts} from '../../../utils';
import useForm from '../../../utils/userForm';
import {
  JSONDepartments,
  JSONPaymentType,
  JSONRoles,
  JSONStatus,
} from '../../../assets/json';
import {setEmployeeData} from '../../../redux/actions';

const ModalEmployee = ({label, icon, title, onBackdropPress, isVisible}) => {
  const [formUser, setFormUser] = useForm({
    name: '',
    email: '',
    role: 'dev',
    department: 'agensi',
    noWa: '',
    password: '',
  });

  const [form, setForm] = useForm({
    start: Date.now(),
    clockify: '',
    status: true,
    accountNumber: '',
    accountName: '',
    bank: '',
    paymentType: 'monthly',
    earlyAllowance: '',
    basicSalary: '',
    contract: '',
  });
  const [fileName, setFileName] = useState('');
  const [showDatePickerStart, setShowDatePickerStart] = useState(false);

  const dispatch = useDispatch();

  const onSelectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileName(res[0].name);
      setForm('contract', res[0].uri);
      console.log(form.contract);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const onDatePickerStart = (event, dates) => {
    const currentDate = dates || form.start;
    setShowDatePickerStart(Platform.OS === 'ios');
    setForm('start', moment(currentDate).format('YYYY-MM-DD'));
    console.log(moment(currentDate).format('YYYY-MM-DD'));
  };

  const onCreateEmployee = () => {
    console.log('data user', form);
    dispatch(
      setEmployeeData(
        formUser.name,
        formUser.email,
        formUser.role,
        formUser.department,
        formUser.noWa,
        formUser.password,
        form.start,
        form.clockify,
        form.status,
        form.accountNumber,
        form.accountName,
        form.bank,
        form.paymentType,
        form.earlyAllowance,
        form.contract,
        form.basicSalary,
        setFormUser('reset'),
        setForm('reset'),
      ),
    );
  };

  return (
    <>
      <Modal
        useNativeDriver
        swipeDirection="left"
        animationInTiming={600}
        animationOutTiming={600}
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
              style={styles.btnHeader}
              onPress={onBackdropPress}>
              <ICCancel />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator>
            <View style={styles.content}>
              <Label title="Name" type="project" />
              <Gap height={8} />
              <TextInput
                value={formUser.name}
                onChangeText={value => setFormUser('name', value)}
              />
              <Label title="Email" type="project" />
              <Gap height={8} />
              <TextInput
                keyboardType="email-address"
                value={formUser.value}
                onChangeText={value => setFormUser('email', value)}
              />
              <Label title="Role" type="project" />
              <Gap height={8} />
              <Select
                data={JSONRoles}
                value={formUser.role}
                onSelectChange={value => setFormUser('role', value)}
              />
              <Label title="Department" type="project" />
              <Gap height={8} />
              <Select
                data={JSONDepartments}
                value={formUser.department}
                onSelectChange={value => setFormUser('department', value)}
              />
              <Label title="Whatsapp Number" type="project" />
              <Gap height={8} />
              <TextInput
                keyboardType="phone-pad"
                value={formUser.noWa}
                onChangeText={value => setFormUser('noWa', value)}
              />
              <Label title="Password" type="project" />
              <Gap height={8} />
              <TextInput
                value={formUser.timeline}
                onChangeText={value => setFormUser('password', value)}
              />
              <Label title="Start" type="project" />
              <Gap height={8} />
              <TextInput
                date
                disable={true}
                value={moment(form.start).format('YYYY-MM-DD')}
                placeholder={`${form.start}`}
                onPress={() => setShowDatePickerStart(!showDatePickerStart)}
              />
              <Label title="Clockify" type="project" />
              <Gap height={8} />
              <TextInput
                value={form.clockify}
                onChangeText={value => setForm('clockify', value)}
              />
              <Label title="Status" type="project" />
              <Gap height={8} />
              <Select
                data={JSONStatus}
                value={form.status}
                onSelectChange={value => setForm('status', value)}
              />
              <Label title="Account Number" type="project" />
              <Gap height={8} />
              <TextInput
                keyboardType="numeric"
                value={form.accountNumber}
                onChangeText={value => setForm('accountNumber', value)}
              />
              <Label title="Account Name" type="project" />
              <Gap height={8} />
              <TextInput
                value={form.accountName}
                onChangeText={value => setForm('accountName', value)}
              />
              <Label title="Bank" type="project" />
              <Gap height={8} />
              <TextInput
                value={form.bank}
                onChangeText={value => setForm('bank', value)}
              />
              <Label title="Payment Type" type="project" />
              <Gap height={8} />
              <Select
                data={JSONPaymentType}
                value={form.paymentType}
                onSelectChange={value => setForm('paymentType', value)}
              />
              <Label title="Early Allowance" type="project" />
              <Gap height={8} />
              <TextInput
                keyboardType="numeric"
                value={form.earlyAllowance}
                onChangeText={value => setForm('earlyAllowance', value)}
              />
              <Label title="Basic salary" type="project" />
              <Gap height={8} />
              <TextInput
                keyboardType="numeric"
                value={form.basicSalary}
                onChangeText={value => setForm('basicSalary', value)}
              />
              <Label title="Contract" type="project" />
              <Gap height={8} />
              <FileUpload onChangeText={onSelectFile} fileName={fileName} />
            </View>
          </ScrollView>
          <Gap height={12} />
          <View style={styles.footer}>
            <View />
            <View style={styles.btnFooter}>
              <Button
                type="modal"
                title="Cancel"
                bgColor="#6C757D"
                onPress={onBackdropPress}
              />
              <Gap width={4} />
              <Button
                type="modal"
                title="Done"
                bgColor={colors.primary}
                onPress={onCreateEmployee}
              />
            </View>
          </View>
        </View>
        {showDatePickerStart && (
          <DateTimePicker
            testID="dateTimePicker"
            value={form.start}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onDatePickerStart}
          />
        )}
      </Modal>
    </>
  );
};

export default ModalEmployee;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    paddingVertical: 48,
    margin: 0,
    borderRadius: 4,
    flex: 1,
    height: '90%',
  },
  modal: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#DEE2E6',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 0.5,
  },
  btnHeader: {
    padding: 4,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#212529',
  },
  label: {
    fontSize: 16,
    color: '#212529',
    fontFamily: fonts.primary[700],
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    padding: 12,
    borderWidth: 0.5,
    borderTopColor: '#DEE2E6',
  },
  btnFooter: {
    flexDirection: 'row',
  },
});
