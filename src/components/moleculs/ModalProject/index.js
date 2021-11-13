import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Gap, Label, Select, TextInput} from '../..';
import {ICCancel} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {JSONGroupType, JSONModel, JSONStatus} from '../../../utils/json';
import useForm from '../../../utils/userForm';

const ModalProject = ({label, icon, title, onBackdropPress, isVisible}) => {
  const [form, setForm] = useForm({
    project: '',
    status: 'On Going',
    model: 'Projectly',
    progress: '',
    value: 0,
    pm: 'Rijal',
    frontend: '',
    backend: '',
    mobile: '',
    designer: '',
    analisis_design: '',
    date_analisis_design: '00-00-0000',
    proposal: '',
    date_proposal: '00-00-0000',
    mou: '',
    date_mou: '',
    akad_dev: '',
    date_akad_dev: '00-00-0000',
    group_client: '',
    group_developer: '',
    repayment: '',
    date_repayment: '00-00-0000',
    start: '00-00-0000',
    timeline: '00-00-0000',
    note: '',
    daily_scrum: false,
    portfolio: '',
    testimoni: '',
    date_testimoni: '00-00-0000',
    handover: '',
    date_handover: '00-00-0000',
    gitlab: '',
    gitlab_project_id: 0,
    group_id: 0,
    group_whatsapp: null,
    keyWoowa: null,
    groupType: '',
  });
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
            <Label title="Name" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.project}
              onChangeText={value => setForm('project', value)}
            />
            <Label title="Nominal" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.value}
              onChangeText={value => setForm('project', value)}
            />
            <Label title="Status" type="project" />
            <Gap height={8} />
            <Select
              data={JSONStatus}
              value={form.status}
              onSelectChange={value => setForm('status', value)}
            />
            <Label title="Model" type="project" />
            <Gap height={8} />
            <Select
              data={JSONModel}
              value={form.model}
              onSelectChange={value => setForm('model', value)}
            />
            <Label title="Started" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.start}
              onChangeText={value => setForm('start', value)}
            />
            <Label title="Timeline" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.timeline}
              onChangeText={value => setForm('timeline', value)}
            />
            <Label title="Gitlab ID" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.gitlab_project_id}
              onChangeText={value => setForm('gitlab_project_id', value)}
            />
            <Label title="Daily Scrum" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.daily_scrum}
              onChangeText={value => setForm('daily_scrum', value)}
            />
            <Label title="Project Manager" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.pm}
              onChangeText={value => setForm('pm', value)}
            />
            <Label title="Frontend Dev" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.frontend}
              onChangeText={value => setForm('frontend', value)}
            />
            <Label title="Backend Dev" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.backend}
              onChangeText={value => setForm('backend', value)}
            />
            <Label title="Designer" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.designer}
              onChangeText={value => setForm('designer', value)}
            />
            <Label title="Mou Project" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.mou}
              onChangeText={value => setForm('mou', value)}
            />
            <Label title="Mou Dev" type="project" />
            <Gap height={8} />
            <TextInput />
            <Label title="Payment" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.repayment}
              onChangeText={value => setForm('repayment', value)}
            />
            <Label title="Hand Over" type="project" />
            <Gap height={8} />
            <TextInput
              value={form.handover}
              onChangeText={value => setForm('handover', value)}
            />
            <Label title="Group Type" type="project" />
            <Gap height={8} />
            <Select
              data={JSONGroupType}
              value={form.grouptype}
              onSelectChange={value => setForm('grouptype', value)}
            />
            {form.grouptype === 'Telegram' ? (
              <>
                <Label title="Telegram Group" type="project" />
                <Gap height={8} />
                <TextInput
                  value={form.group_client}
                  onChangeText={value => setForm('group_client', value)}
                />
                <Label title="Telegram ID" type="project" />
                <Gap height={8} />
                <TextInput
                  value={form.group_id}
                  onChangeText={value => setForm('group_id', value)}
                />
              </>
            ) : (
              <>
                <Label title="Whatsapp Group" type="project" />
                <Gap height={8} />
                <TextInput
                  value={form.group_whatsapp}
                  onChangeText={value => setForm('group_whatsapp', value)}
                />
                <Label title="Whatsapp ID" type="project" />
                <Gap
                  height={8}
                  value={form.group_whatsapp}
                  onChangeText={value => setForm('group_whatsapp', value)}
                />
                <TextInput />
              </>
            )}
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

export default ModalProject;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    paddingVertical: 48,
    margin: 0,
    borderRadius: 4,
    flex: 1,
    height: '90%',
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
