import React, {useState} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';
import {Button, FileUpload, Gap, Label, Select, TextInput} from '../..';
import {ICCancel} from '../../../assets';
import {colors, fonts, showMessage} from '../../../utils';
import {JSONGroupType, JSONModel, JSONStatus} from '../../../utils/json';
import useForm from '../../../utils/userForm';
import moment from 'moment';
import {setProjectData} from '../../../redux/actions';

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
    date_analisis_design: Date.now(),
    proposal: '',
    date_proposal: Date.now(),
    mou: '',
    date_mou: '',
    akad_dev: '',
    date_akad_dev: Date.now(),
    group_client: '',
    group_developer: '',
    repayment: '',
    date_repayment: Date.now(),
    start: Date.now(),
    timeline: Date.now(),
    note: '',
    daily_scrum: false,
    portfolio: '',
    testimoni: '',
    date_testimoni: Date.now(),
    handover: '',
    date_handover: Date.now(),
    gitlab: '',
    gitlab_project_id: 0,
    group_id: 0,
    group_whatsapp: null,
    keyWoowa: null,
    groupType: 'Whatsapp',
  });
  const [showDatePickerStart, setShowDatePickerStart] = useState(false);
  const [showDatePickerTimeline, setShowDatePickerTimeline] = useState(false);
  const [fileMouProject, setFileMouProject] = useState('');
  const [fileMouDev, setFileMouDev] = useState('');
  const [fileHandOver, setFileHandOver] = useState('');

  const dispatch = useDispatch();

  const onDatePickerStart = (event, dates) => {
    const currentDate = dates || form.start;
    setShowDatePickerStart(Platform.OS === 'ios');
    setForm('start', new Date(moment(currentDate).format('YYYY-MM-DD')));
  };

  const onDatePickerTimeline = (event, dates) => {
    const currentDate = dates || form.timeline;
    setShowDatePickerTimeline(Platform.OS === 'ios');
    setForm('timeline', new Date(moment(currentDate).format('YYYY-MM-DD')));
    console.log(moment(currentDate).format('YYYY-MM-DD'));
  };

  const onSelectFileMouProject = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileMouProject(res[0].name);
      setForm('mou', res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        showMessage('Canceled from single doc picker');
      } else {
        showMessage('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const onSelectFileMouDev = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileMouDev(res[0].name);
      setForm('akad_dev', res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        showMessage('Canceled from single doc picker');
      } else {
        showMessage('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const onSelectFileHandOver = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileHandOver(res[0].name);
      setForm('handover', res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        showMessage('Canceled from single doc picker');
      } else {
        showMessage('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const onSubmit = () => {
    dispatch(
      setProjectData(
        form.project,
        form.status,
        form.model,
        form.progress,
        form.value,
        form.pm,
        form.frontend,
        form.backend,
        form.mobile,
        form.designer,
        form.analisis_design,
        form.date_analisis_design,
        form.proposal,
        form.date_proposal,
        form.mou,
        form.date_mou,
        form.akad_dev,
        form.date_akad_dev,
        form.group_client,
        form.group_developer,
        form.repayment,
        form.date_repayment,
        form.start,
        form.timeline,
        form.note,
        form.daily_scrum,
        form.portfolio,
        form.testimoni,
        form.date_testimoni,
        form.handover,
        form.date_handover,
        form.gitlab,
        form.gitlab_project_id,
        form.group_id,
        form.group_whatsapp,
        form.keyWoowa,
        form.groupType,
        setForm('reset'),
      ),
    );
  };

  return (
    <>
      <Modal
        useNativeDriver
        swipeDirection="left"
        animationInTiming={600}
        animationOutTiming={600}
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
              style={styles.btnHeader}
              onPress={onBackdropPress}>
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
                keyboardType="numeric"
                value={form.value}
                onChangeText={value => setForm('value', value)}
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
                date
                disable={true}
                value={moment(form.start).format('YYYY-MM-DD')}
                placeholder={`${form.start}`}
                onPress={() => setShowDatePickerStart(!showDatePickerStart)}
              />
              <Label title="Timeline" type="project" />
              <Gap height={8} />
              <TextInput
                date
                disable={true}
                value={moment(form.timeline).format('YYYY-MM-DD')}
                placeholder={`${form.timeline}`}
                onPress={() =>
                  setShowDatePickerTimeline(!showDatePickerTimeline)
                }
              />
              <Label title="Gitlab ID" type="project" />
              <Gap height={8} />
              <TextInput
                value={form.gitlab_project_id}
                onChangeText={value => setForm('gitlab_project_id', value)}
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
              <FileUpload
                onChangeText={onSelectFileMouProject}
                fileName={fileMouProject.length < 1 ? fileMouProject : ''}
              />
              <Label title="Mou Dev" type="project" />
              <Gap height={8} />
              <FileUpload
                onChangeText={onSelectFileMouDev}
                fileName={fileMouDev.length < 1 ? fileMouDev : ''}
              />
              <Label title="Payment" type="project" />
              <Gap height={8} />
              <TextInput
                keyboardType="numeric"
                value={form.repayment}
                onChangeText={value => setForm('repayment', value)}
              />
              <Label title="Hand Over" type="project" />
              <FileUpload
                onChangeText={onSelectFileHandOver}
                fileName={fileHandOver.length < 1 ? fileHandOver : ''}
              />
              <Label title="Group Type" type="project" />
              <Gap height={8} />
              <Select
                data={JSONGroupType}
                value={form.groupType}
                onSelectChange={value => setForm('groupType', value)}
              />
              {form.groupType === 'Telegram' && (
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
              )}
              {form.groupType === 'Whatsapp' && (
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
              <Button
                type="modal"
                title="Done"
                bgColor={colors.primary}
                onPress={onSubmit}
              />
            </View>
          </View>
        </View>
      </Modal>
      {showDatePickerStart && (
        <DateTimePicker
          testID="dateTimePicker"
          value={form.start}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onDatePickerStart}
        />
      )}
      {showDatePickerTimeline && (
        <DateTimePicker
          testID="dateTimePicker"
          value={form.timeline}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onDatePickerTimeline}
        />
      )}
    </>
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
