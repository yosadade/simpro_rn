import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../..';
import {
  ICArrowUp,
  ICChart,
  ICChartBar,
  ICChartLine,
  ICChartPie,
  ICCompleted,
  ICEdit,
  ICTrash,
} from '../../../assets';
import {fonts} from '../../../utils';

const CardProjectActive = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Project</Text>
      <View style={styles.wrapper}>
        <View style={styles.wrapperCash}>
          <View style={styles.image}>
            <ICChartBar />
          </View>
          <View>
            <Text style={styles.title}>Prospek</Text>
            <Text style={styles.subTitle}>0</Text>
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
          <View style={styles.image}>
            <ICChart />
          </View>
          <View>
            <Text style={styles.title}>On Going</Text>
            <Text style={styles.subTitle}>11</Text>
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
          <View style={styles.image}>
            <ICChartLine />
          </View>
          <View>
            <Text style={styles.title}>On Hold</Text>
            <Text style={styles.subTitle}>3</Text>
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
          <View style={styles.image}>
            <ICChartPie />
          </View>
          <View>
            <Text style={styles.title}>Maintenance</Text>
            <Text style={styles.subTitle}>2</Text>
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
          <View style={styles.image}>
            <ICCompleted />
          </View>
          <View>
            <Text style={styles.title}>Complete</Text>
            <Text style={styles.subTitle}>21</Text>
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

export default CardProjectActive;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginHorizontal: 24,
    borderWidth: 0.5,
    borderColor: '#DEE2E6',
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
    alignItems: 'center',
    justifyContent: 'center',
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
