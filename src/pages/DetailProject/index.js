import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICBack} from '../../assets';
import {CardDetail, Gap} from '../../components';
import {fonts} from '../../utils';

const DetailProject = ({navigation, route}) => {
  const {
    project,
    start,
    timeline,
    gitlab,
    daily_scrum,
    pm,
    frontend,
    backend,
    designer,
    group_client,
    group_developer,
    gitlab_project_id,
    group_whatsapp,
  } = route.params.item;

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
          <Text style={styles.title}>{project}</Text>
        </View>
        {/* <Gap height={24} />
        <CardProject /> */}
        <Gap height={24} />
        <CardDetail
          label="Project Informations"
          title1="Started"
          value1={start}
          title2="Timeline"
          value2={timeline}
          title3="Gitlab"
          value3={gitlab}
          title4="Daily Scrum"
          value4={daily_scrum ? 'Already' : 'Not Ready'}
        />
        <Gap height={12} />
        <CardDetail
          label="Man Power"
          title1="Project Manager"
          value1={pm}
          title2="Frontend Dev"
          value2={frontend}
          title3="Backend Dev"
          value3={backend}
          title4="Designer"
          value4={designer}
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
          title1="Group Client"
          value1={group_client}
          title2="Group Developer"
          value2={group_developer}
          title3="Telegram ID"
          value3={gitlab_project_id}
          title4="Whatsapp ID"
          value4={group_whatsapp}
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
    fontSize: 20,
    color: '#212529',
    fontFamily: fonts.primary[700],
  },
});
