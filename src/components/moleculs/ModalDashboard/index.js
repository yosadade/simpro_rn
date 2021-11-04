import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Gap, Label, TextInput} from '../..';
import {ICCancel} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ModalDashboard = ({label, icon, title, onBackdropPress, isVisible}) => {
  return (
    <Modal
      swipeDirection="left"
      animationInTiming={600}
      animationOutTiming={800}
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
        <ScrollView showsVerticalScrollIndicator>
          <View style={styles.content}>
            <Label title="Account" type="project" />
            <Gap height={8} />
            <TextInput />
            <Label title="Nominal" type="project" />
            <Gap height={8} />
            <TextInput />
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
            <Button type="modal" title="Done" bgColor={colors.primary} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 24,
    margin: 0,
    borderRadius: 4,
    flex: 1,
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
