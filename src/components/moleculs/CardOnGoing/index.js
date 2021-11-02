import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';

const CardOnGoing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>On Going</Text>
      <View style={styles.card}>
        <View>
          <View style={styles.badge}>
            <Text style={styles.titleName}>Donasee</Text>
          </View>
          <Text>QA</Text>
          <Text>QA</Text>
        </View>
        <View>
          <View style={styles.badgeType}>
            <Text style={styles.titleType}>Projectly</Text>
          </View>
          <Text>QA</Text>
          <Text>QA</Text>
        </View>
      </View>
    </View>
  );
};

export default CardOnGoing;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  label: {
    fontSize: 16,
    color: '#212529',
    fontFamily: fonts.primary[700],
  },
  card: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    padding: 12,
    borderBottomColor: '#FFC107',
    borderBottomWidth: 4,
  },
  badge: {
    padding: 3,
    borderRadius: 4,
    backgroundColor: '#A0D9B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleName: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: fonts.primary[700],
    color: '#212529',
  },
  titleType: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: fonts.primary[700],
    color: '#FFFFFF',
  },
  badgeType: {
    padding: 3,
    borderRadius: 4,
    backgroundColor: '#FFC107',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
