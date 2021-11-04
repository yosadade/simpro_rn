import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Gap} from '..';
import {ICCancel} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CustomModal = ({label, icon, title, onBackdropPress, isVisible}) => {
  return (
    <Modal
      swipeDirection="left"
      animationInTiming={600}
      animationOutTiming={600}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={styles.container}
      // customBackdrop={
      //   <TouchableWithoutFeedback onPress={() => setModal(!modal)}>
      //     <View style={{ flex: 1 }} />
      //   </TouchableWithoutFeedback>
      // }
    >
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.label}>{label}</Text>
          <TouchableOpacity style={styles.btnHeader} onPress={onBackdropPress}>
            <ICCancel />
          </TouchableOpacity>
        </View>
        <Gap height={24} />
        <View style={styles.content}>
          {icon}
          <Gap height={14} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Gap height={24} />
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
            <Button type="modal" title="Done" bgColor={colors.primary} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 24,
    margin: 0,
    borderRadius: 4,
  },
  modal: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
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
    justifyContent: 'center',
    alignItems: 'center',
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
    // width: deviceWidth,
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
