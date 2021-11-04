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

const DetailEmployee = ({navigation}) => {
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
          <Text style={styles.title}>Luke Short</Text>
        </View>
        <Gap height={24} />
        <CardEmployee />
        <Gap height={24} />
        <CardDetail
          label="Personal Informations"
          title1="Email"
          value1="lukeshort@mail.com"
          title2="Phone Number"
          value2="+628991989089"
          title3="Gitlab"
          value3="luke@gitlab.com"
          title4="Clockify"
          value4="193483820"
        />
        <Gap height={12} />
        <CardDetail
          label="Man Power"
          title1="Start"
          value1="1 December 2021"
          title2="Role"
          value2="Project Manager"
          title3="Department"
          value3="Woowa"
          title4="Status"
          value4="Active"
        />
        <Gap height={12} />
        <CardDetail
          label="Bank Information"
          title1="Account Name"
          value1="Luke Short Evan"
          title2="Account No."
          value2="153838348340"
          title3="Bank Name"
          value3="BSI Syariah"
          title4="Type"
          value4="Monthly"
        />
        <Gap height={12} />
        <CardDetail
          label="Payment"
          title1="Salary"
          value1="IDR 3.500.000"
          title2="Allowance"
          value2="IDR 125.000"
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
