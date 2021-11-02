import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../..';
import {ICArrowUp, ICEdit, ICTrash} from '../../../assets';
import {fonts} from '../../../utils';

const CardDeveloper = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Developer</Text>
      <View style={styles.wrapper}>
        <View style={styles.wrapperCash}>
          <View style={styles.image} />
          <View>
            <Text style={styles.title}>Projectly</Text>
            <Text style={styles.subTitle}>9</Text>
          </View>
        </View>
        <View style={styles.wrapperBtn}>
          <TouchableOpacity style={styles.btnArrow}>
            <ICArrowUp />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperCash}>
          <View style={styles.image} />
          <View>
            <Text style={styles.title}>Dev Sharing</Text>
            <Text style={styles.subTitle}>5</Text>
          </View>
        </View>
        <View style={styles.wrapperBtn}>
          <TouchableOpacity style={styles.btnArrow}>
            <ICArrowUp />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperCash}>
          <View style={styles.image} />
          <View>
            <Text style={styles.title}>Taskly</Text>
            <Text style={styles.subTitle}>5</Text>
          </View>
        </View>
        <View style={styles.wrapperBtn}>
          <TouchableOpacity style={styles.btnArrow}>
            <ICArrowUp />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperCash}>
          <View style={styles.image} />
          <View>
            <Text style={styles.title}>Start Up</Text>
            <Text style={styles.subTitle}>3</Text>
          </View>
        </View>
        <View style={styles.wrapperBtn}>
          <TouchableOpacity style={styles.btnArrow}>
            <ICArrowUp />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardDeveloper;

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
  wrapper: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperCash: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#FFE18C',
    marginRight: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#212529',
  },
  subTitle: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: fonts.primary[700],
    color: '#212529',
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  btn: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  btnArrow: {
    padding: 1,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
});