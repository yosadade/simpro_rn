import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICBack} from '../../assets';
import {CardDetail, CardEmployee, Gap} from '../../components';
import {fonts} from '../../utils';

const DetailEmployee = ({navigation, route}) => {
  const {id, name, email, no_wa, role, department} = route.params.item;
  const {
    start,
    status,
    name_rek,
    no_rek,
    bank,
    payment_type,
    fee,
    tunjangan_awal,
  } = route.params.item.employee;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.goBack()}>
            <ICBack />
          </TouchableOpacity>
          <Gap width={12} />
          <Text style={styles.title}>{name}</Text>
        </View>
        <Gap height={24} />
        <CardEmployee
          id={id}
          name={name}
          role={role}
          status={status}
          department={department}
          noWa={no_wa}
          start={start}
        />
        <CardDetail
          label="Personal Informations"
          title1="Email"
          value1={email}
          title2="Phone Number"
          value2={no_wa}
          title3="Gitlab"
          value3="Gitlab"
          title4="Clockify"
          value4="193483820"
        />
        <Gap height={12} />
        <CardDetail
          label="Man Power"
          title1="Start"
          value1={start}
          title2="Role"
          value2={role}
          title3="Department"
          value3={department}
          title4="Status"
          value4={status ? 'Active' : 'Not Active'}
        />
        <Gap height={12} />
        <CardDetail
          label="Bank Information"
          title1="Account Name"
          value1={name_rek}
          title2="Account No."
          value2={no_rek}
          title3="Bank Name"
          value3={bank}
          title4="Type"
          value4={payment_type}
        />
        <Gap height={12} />
        <CardDetail
          label="Payment"
          title1="Salary"
          value1={`IDR ${fee}`}
          title2="Allowance"
          value2={tunjangan_awal !== '' ? `IDR ${tunjangan_awal}` : '-'}
          title3="Contract"
          value3="Here"
          title4="Password"
          value4="********"
        />
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default DetailEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  title: {
    fontSize: 23,
    color: '#212529',
    fontFamily: fonts.primary[700],
  },
});
