import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICBack} from '../../assets';
import {CardDetail, CardProject, Gap} from '../../components';
import {fonts} from '../../utils';

const DetailProject = ({navigation}) => {
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
          <Text style={styles.title}>Alusio</Text>
        </View>
        <Gap height={24} />
        <CardProject />
        <Gap height={24} />
        <CardDetail
          label="Project Informations"
          title1="Started"
          value1="31 October 2021"
          title2="Timeline"
          value2="31 December 2021"
          title3="Gitlab"
          value3="Here"
          title4="Daily Scrum"
          value4="Already"
        />
        <Gap height={12} />
        <CardDetail
          label="Man Power"
          title1="Project Manager"
          value1="Dylan Hunter"
          title2="Frontend Dev"
          value2="Alex Kehl"
          title3="Backend Dev"
          value3="Lucas Pitzec"
          title4="Designer"
          value4="Chris Evans"
        />
        <Gap height={12} />
        <CardDetail
          label="Proposal"
          title1="Mou Project"
          value1="Here"
          title2="Mou Developer"
          value2="Here"
          title3="Payment"
          value3="Here"
          title4="Handover"
          value4="Here"
        />
        <Gap height={12} />
        <CardDetail
          label="Contact"
          title1="Telegram"
          value1="Here"
          title2="Whatsapp"
          value2="Here"
          title3=""
          value3=""
          title4=""
          value4=""
        />
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default DetailProject;

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
