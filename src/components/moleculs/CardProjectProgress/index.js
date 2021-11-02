import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';
import {ProgressBar, Gap} from '../../../components';
import {ICCheckRound, ICEdit, ICUnCheckRound} from '../../../assets';

const CardProgressProject = () => {
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Project Active</Text>
      <View style={styles.card}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Alusio</Text>
          <View style={styles.wrapper}>
            <Text style={styles.title}>87%</Text>
            <Gap width={6} />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setCheck(!check)}>
              {check ? <ICCheckRound /> : <ICUnCheckRound />}
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={6} />
        <ProgressBar color="#EEE5FF" />
      </View>
    </View>
  );
};

export default CardProgressProject;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    color: '#212529',
    fontFamily: fonts.primary[700],
  },
  card: {
    marginTop: 24,
    justifyContent: 'flex-start',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#212529',
  },
  btn: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
});